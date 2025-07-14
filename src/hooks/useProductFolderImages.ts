import { useState, useEffect } from 'react';
import { CloudinaryFolderService } from '../lib/cloudinary-folder';

interface ProductImages {
  delantero?: string;
  trasero?: string;
  caja?: string;
  detalles?: string;
}

export const useProductFolderImages = (folderCloudinary: string) => {
  const [images, setImages] = useState<ProductImages>({});
  const [imagesArray, setImagesArray] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      if (!folderCloudinary) return;

      try {
        setLoading(true);
        setError(null);
        
        const cloudinaryService = new CloudinaryFolderService();
        
        // Obtener las imágenes como objeto
        const imagesObject = await cloudinaryService.getProductFolderImages(folderCloudinary);
        setImages(imagesObject);
        
        // Obtener las imágenes como array para el carousel
        const imagesArray = await cloudinaryService.getProductImagesArray(folderCloudinary);
        setImagesArray(imagesArray);
        
      } catch (err) {
        setError('Error al cargar las imágenes del producto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folderCloudinary]);

  return { 
    images,           // Objeto: { delantero: 'url', trasero: 'url', ... }
    imagesArray,      // Array: ['url1', 'url2', ...]
    loading, 
    error 
  };
};
