import { useState, useEffect, cache } from 'react'
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

                const cached = sessionStorage.getItem('productsCache')

                if (cached) {
                    const parsed = JSON.parse(cached)
                    setProducts(parsed)
                    setLoading(false)
                    return
                }

                const data = await sheetdbClient.getProducts();
                setProducts(data);
                sessionStorage.setItem('productsCache', JSON.stringify(data))
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
