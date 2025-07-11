import { useState, useEffect } from 'react';
import { CloudinaryFolderService } from '../lib/cloudinary-folder';

export const useProductCatalogImage = (folderCloudinary: string) => {
  const [imageUrl, setImageUrl] = useState<string>('/assets/frasco-vigo.png');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      if (!folderCloudinary) return;

      try {
        setLoading(true);
        const cloudinaryService = new CloudinaryFolderService();
        const url = await cloudinaryService.getProductDelanteroImage(folderCloudinary);
        setImageUrl(url);
      } catch (err) {
        console.error('Error fetching catalog image:', err);
        setImageUrl('/assets/frasco-vigo.png'); // Fallback
        setError('Error al cargar la imagen');
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [folderCloudinary]);

  return { imageUrl, loading, error };
};