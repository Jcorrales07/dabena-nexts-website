import { useState, useEffect } from 'react';
import { Product } from '../types/product';
import { sheetdbClient } from '../lib/sheetdb';

export const useProduct = (productId: number) => {
  const [product, setProduct] = useState<Product | undefined | null>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      
      try {
        setLoading(true);

        const cached = sessionStorage.getItem('productsCache')

        if (cached) {
          const products: Product[] = JSON.parse(cached)
          const product = products.find((product, i) => product.id === productId)
          setProduct(product)
          setLoading(false)
          return
        }

        const data = await sheetdbClient.getProductById(productId);
        setProduct(data);
        sessionStorage.setItem('productCache', JSON.stringify(data))
      } catch (err) {
        setError('Error al cargar el producto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};