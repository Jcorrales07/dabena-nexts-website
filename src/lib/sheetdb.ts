import { Product } from '../types/product';
import { cache } from './cache';

export const sheetdbClient = {
  async getProducts(): Promise<Product[]> {
    const cacheKey = 'products_with_images';
    
    // Intentar obtener del cache primero
    const cachedProducts = cache.get<Product[]>(cacheKey);
    if (cachedProducts) {
      return cachedProducts;
    }

    try {
      console.log('Calling products API...');
      const response = await fetch('/api/productos');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch products');
      }
      
      // Los productos ya vienen con imágenes incluidas
      return data.products;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  async getProductById(id: string): Promise<Product | null> {
    const cacheKey = `product_with_images_${id}`;
    
    // Intentar obtener del cache primero
    const cachedProduct = cache.get<Product>(cacheKey);
    if (cachedProduct) {
      return cachedProduct;
    }

    try {
      console.log(`Calling products API for ID: ${id}`);
      const response = await fetch(`/api/products?id=${encodeURIComponent(id)}`);
      
      if (!response.ok) {
        if (response.status === 404) {
          return null;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch product');
      }
      
      // El producto ya viene con imágenes incluidas
      return data.product;
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  }
};