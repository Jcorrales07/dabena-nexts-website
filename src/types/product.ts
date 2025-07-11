export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio: string;
  cantidad: string; // ml/kg
  folderCloudinary: string;
  imagenes: string[];
  variantes?: string[];
  // Agrega más campos según tu estructura de SheetDB
}