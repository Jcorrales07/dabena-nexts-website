interface ProductImages {
  delantero?: string;
  trasero?: string;
  caja?: string;
  detalles?: string;
}

export class CloudinaryFolderService {
  // Obtener todas las imágenes de una carpeta específica usando nuestra API
  async getProductFolderImages(folderCloudinary: string): Promise<ProductImages> {
    try {
      console.log(`Solicitando imágenes para folder: ${folderCloudinary}`);
      
      // Llamar a nuestra API route en lugar de directamente a Cloudinary
      const response = await fetch(`/api/cloudinary/images?folder=${encodeURIComponent(folderCloudinary)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch images');
      }
      
      return data.images;
    } catch (error) {
      console.error('Error fetching folder images:', error);
      return {};
    }
  }

  // Convertir el objeto a array para tu carousel
  async getProductImagesArray(folderCloudinary: string): Promise<string[]> {
    const imagesObject = await this.getProductFolderImages(folderCloudinary);
    
    // Orden preferido: delantero, trasero, caja, detalles
    const orderedImages: string[] = [];
    
    if (imagesObject.delantero) orderedImages.push(imagesObject.delantero);
    if (imagesObject.trasero) orderedImages.push(imagesObject.trasero);
    if (imagesObject.caja) orderedImages.push(imagesObject.caja);
    if (imagesObject.detalles) orderedImages.push(imagesObject.detalles);
    
    // Si no hay imágenes, devolver fallback
    return orderedImages.length > 0 ? orderedImages : ['/assets/frasco-vigo.png'];
  }

  // Método para obtener solo la imagen delantero (para catálogo)
  async getProductDelanteroImage(folderCloudinary: string): Promise<string> {
    const imagesObject = await this.getProductFolderImages(folderCloudinary);
    return imagesObject.delantero || '/assets/frasco-vigo.png';
  }
}