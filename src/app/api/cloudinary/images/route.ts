import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { cache } from '../../../../lib/cache';

interface CloudinaryResource {
  public_id: string;
  url: string;
  secure_url: string;
  format: string;
}

interface ProductImages {
  delantero?: string;
  trasero?: string;
  caja?: string;
  detalles?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const folderCloudinary = searchParams.get('folder');

    if (!folderCloudinary) {
      return NextResponse.json(
        { error: 'Folder parameter is required' },
        { status: 400 }
      );
    }

    const cacheKey = `cloudinary_images_${folderCloudinary}`;
    
    // Intentar obtener del cache primero
    const cachedImages = cache.get<ProductImages>(cacheKey);
    if (cachedImages) {
      return NextResponse.json({
        success: true,
        images: cachedImages,
        folder: folderCloudinary,
        cached: true
      });
    }

    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    if (!cloudName || !apiKey || !apiSecret) {
      console.error('Missing Cloudinary credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log(`Fetching images from Cloudinary for folder: ${folderCloudinary}`);

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

    // Guardar en cache por 30 minutos (las imágenes cambian menos frecuentemente)
    cache.set(cacheKey, productImages, 30 * 60 * 1000);

    console.log(`Images organized for ${folderCloudinary}:`, productImages);

    return NextResponse.json({
      success: true,
      images: productImages,
      folder: folderCloudinary,
      cached: false
    });

  } catch (error) {
    console.error('Error fetching images from Cloudinary:', error);
    return NextResponse.json(
      { error: 'Failed to fetch images' },
      { status: 500 }
    );
  }
}