import { useState, useEffect } from 'react'
import { Product } from '@/types/product'
import { sheetdbClient } from '@/lib/sheetdb'

export const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const data = await sheetdbClient.getProducts();
                console.log('data', data)
                setProducts(data);
            } catch (err) {
                setError('Error al cargar los productos');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, [])

    return { products, loading, error };
}