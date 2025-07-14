export interface Product {
    id: number;
    nombre: string;
    precioPublico: number;
    descripcion: string;
    contenidoNeto: number;
    tipoProducto: string;
    folderCloudinary: string;
    imagenes: {
        caja: string;
        delantero: string;
        trasero: string;
        detalles: string;
    };
}