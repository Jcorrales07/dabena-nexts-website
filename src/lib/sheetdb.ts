import axios from 'axios'
import { Product } from '../types/product'

const SHEETDB_API_URL = process.env.NEXT_PUBLIC_SHEETDB_API_URL;

export const sheetdbClient = {
    async getProducts(): Promise<Product[]> {
        try {
            const response = await axios.get(SHEETDB_API_URL!)

            const data = response.data

            console.log('datadata', data)

            // transformacion de datos
            const productos: Product[] = data.map((ele: any): Product => ({
                id: Number(ele.id),
                nombre: ele.nombre,
                precioPublico: Number(ele.precioPublico),
                descripcion: ele.descripcion,
                contenidoNeto: Number(ele.contenidoNeto),
                tipoProducto: ele.tipoProducto,
                folderCloudinary: ele.folderCloudinary,
                imagenes: JSON.parse(ele.imagenes),
            }));

            return productos;
        } catch (error) {
            console.error('Error fetching products from SheetDB:', error);
            throw error;
        }
    },

    async getProductById(id: number): Promise<Product | null> {
        try {
            const response = await axios.get(`${SHEETDB_API_URL}/search?id=${id}`);
            return response.data.length > 0 ? response.data[0] : null;
        } catch (error) {
            console.error('Error fetching product by ID:', error);
            throw error;
        }
    }
}
