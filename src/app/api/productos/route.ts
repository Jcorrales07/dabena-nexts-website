import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cache } from '../../../lib/cache';

interface CloudinaryResource {
  public_id: string;
  url: string;
  secure_url: string;
  format: string;
}

interface ProductImages {
  caja?: string;
  delantero?: string;
  trasero?: string;
  detalles?: string;
}

interface SheetDBProduct {
  id: string;
  nombre: string;
  descripcion: string;
  precioPublico: string;
  precioMayorista: string;
  contenidoNeto: string;
  tipoProducto: string;
  folderCloudinary: string;
  variantes?: string[];
}

interface Product extends SheetDBProduct {
  imagenes: string[];
}

// Función para generar imágenes de fallback
function getFallbackImages(productName: string): string[] {
  // Imagen por defecto para todos los tipos
  const defaultImage = '/assets/frasco-vigo.png';
  
  // Puedes personalizar esto según el tipo de producto o nombre
  const fallbackImages = [
    defaultImage, // delantero
    defaultImage, // trasero  
    defaultImage, // caja
    defaultImage  // detalles
  ];
  
  return fallbackImages;
}

async function getCloudinaryImages(folderCloudinary: string): Promise<string[]> {
  try {
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Missing Cloudinary credentials');
      return [];
    }

    console.log(`Searching for images in folder: ${folderCloudinary}`);

    const url = `https://api.cloudinary.com/v1_1/${cloudName}/resources/image`;
    
    const params = {
      type: 'upload',
      prefix: folderCloudinary,
      max_results: 20
    };

    const response = await axios.get(url, {
      params,
      auth: {
        username: apiKey,
        password: apiSecret
      }
    });

    const resources: CloudinaryResource[] = response.data.resources;
    console.log(`Images found for ${folderCloudinary}:`, resources.map(r => r.public_id));

    if (resources.length === 0) {
      console.log(`No images found for ${folderCloudinary}, using fallback`);
      return [];
    }
    
    // Organizar las imágenes por tipo
    const productImages: ProductImages = {};
    
    resources.forEach(resource => {
      const publicId = resource.public_id;
      
      if (publicId.includes('-delantero')) {
        productImages.delantero = resource.secure_url;
      } else if (publicId.includes('-trasero')) {
        productImages.trasero = resource.secure_url;
      } else if (publicId.includes('-caja')) {
        productImages.caja = resource.secure_url;
      } else if (publicId.includes('-detalles')) {
        productImages.detalles = resource.secure_url;
      }
    });

    // Convertir a array en orden específico
    const orderedImages: string[] = [];
    if (productImages.delantero) orderedImages.push(productImages.delantero);
    if (productImages.trasero) orderedImages.push(productImages.trasero);
    if (productImages.caja) orderedImages.push(productImages.caja);
    if (productImages.detalles) orderedImages.push(productImages.detalles);

    return orderedImages;
  } catch (error) {
    console.error(`Error fetching images for ${folderCloudinary}:`, error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  console.log('hola')
  try {
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get('id');
    
    // Si se solicita un producto específico
    if (productId) {
      return await getSingleProduct(productId);
    }
    
    // Si se solicitan todos los productos
    return await getAllProducts();
  } catch (error) {
    console.error('Error in products API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

async function getAllProducts() {
  const cacheKey = 'products_with_images';
  
  // Intentar obtener del cache primero
  const cachedProducts = cache.get<Product[]>(cacheKey);
  if (cachedProducts) {
    return NextResponse.json({
      success: true,
      products: cachedProducts,
      cached: true,
      count: cachedProducts.length
    });
  }

  try {
    console.log('Fetching all products with images...');
    
    // 1. Obtener productos de SheetDB
    const sheetdbUrl = process.env.NEXT_PUBLIC_SHEETDB_API_URL;
    if (!sheetdbUrl) {
      throw new Error('SheetDB URL not configured');
    }

    const sheetdbResponse = await axios.get(sheetdbUrl);
    const sheetdbProducts: SheetDBProduct[] = sheetdbResponse.data;
    
    console.log(`Found ${sheetdbProducts.length} products from SheetDB`);

    // 2. Obtener imágenes para cada producto en paralelo
    const productsWithImages = await Promise.all(
      sheetdbProducts.map(async (product) => {
        console.log(`Processing product: ${product.nombre} (${product.folderCloudinary})`);
        
        // Intentar obtener imágenes de Cloudinary
        let imagenes = await getCloudinaryImages(product.folderCloudinary);
        
        // Si no hay imágenes, usar fallbacks
        if (imagenes.length === 0) {
          console.log(`No images found for ${product.nombre}, using fallback images`);
          imagenes = getFallbackImages(product.nombre);
        }
        
        console.log(`${product.nombre}: ${imagenes.length} images assigned`);
        
        return {
          ...product,
          imagenes
        } as Product;
      })
    );

    console.log('All products processed with images');

    // Contar productos con imágenes reales vs fallback
    const productsWithRealImages = productsWithImages.filter(p => 
      p.imagenes.length > 0 && !p.imagenes[0].includes('/assets/')
    ).length;
    
    console.log(`Products with real images: ${productsWithRealImages}/${productsWithImages.length}`);

    // 3. Guardar en cache por 15 minutos
    cache.set(cacheKey, productsWithImages, 15 * 60 * 1000);

    return NextResponse.json({
      success: true,
      products: productsWithImages,
      cached: false,
      count: productsWithImages.length,
      stats: {
        withRealImages: productsWithRealImages,
        withFallbackImages: productsWithImages.length - productsWithRealImages
      }
    });

  } catch (error) {
    console.error('Error fetching products with images:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

async function getSingleProduct(productId: string) {
  const cacheKey = `product_with_images_${productId}`;
  
  // Intentar obtener del cache primero
  const cachedProduct = cache.get<Product>(cacheKey);
  if (cachedProduct) {
    return NextResponse.json({
      success: true,
      product: cachedProduct,
      cached: true
    });
  }

  try {
    console.log(`Fetching single product: ${productId}`);
    
    // 1. Obtener producto específico de SheetDB
    const sheetdbUrl = process.env.NEXT_PUBLIC_SHEETDB_API_URL;
    if (!sheetdbUrl) {
      throw new Error('SheetDB URL not configured');
    }

    const sheetdbResponse = await axios.get(`${sheetdbUrl}/search?id=${productId}`);
    const sheetdbProduct: SheetDBProduct = sheetdbResponse.data[0];
    
    if (!sheetdbProduct) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    // 2. Obtener imágenes del producto
    let imagenes = await getCloudinaryImages(sheetdbProduct.folderCloudinary);
    
    // Si no hay imágenes, usar fallbacks
    if (imagenes.length === 0) {
      console.log(`No images found for ${sheetdbProduct.nombre}, using fallback images`);
      imagenes = getFallbackImages(sheetdbProduct.nombre);
    }
    
    const productWithImages: Product = {
      ...sheetdbProduct,
      imagenes
    };

    // 3. Guardar en cache por 20 minutos
    cache.set(cacheKey, productWithImages, 20 * 60 * 1000);

    return NextResponse.json({
      success: true,
      product: productWithImages,
      cached: false
    });

  } catch (error) {
    console.error(`Error fetching product ${productId}:`, error);
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}