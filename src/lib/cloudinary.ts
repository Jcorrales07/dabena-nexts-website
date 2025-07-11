export class CloudinaryService {
  private cloudName: string;
  private baseUrl: string;

  constructor() {
    this.cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || '';
    this.baseUrl = `https://res.cloudinary.com/${this.cloudName}/image/upload`;
  }

  // Generar URL de imagen del producto
  getProductImageUrl(
    productName: string,
    imageType: 'caja' | 'delantero_v1pmec' | 'trasero' | 'detalles',
    options: {
      width?: number;
      height?: number;
      quality?: number;
      format?: string;
    } = {}
  ): string {
    console.log(productName)
    const folderPath = `dabena/${productName.toLowerCase()}-no-bg`;
    const imageName = `${productName.toLowerCase()}-${imageType}`;


    // const transformations = [];

    // if (options.width && options.height) {
    //   transformations.push(`c_fill,w_${options.width},h_${options.height}`);
    // } else if (options.width) {
    //   transformations.push(`w_${options.width}`);
    // } else if (options.height) {
    //   transformations.push(`h_${options.height}`);
    // }

    // if (options.quality) {
    //   transformations.push(`q_${options.quality}`);
    // }

    // if (options.format) {
    //   transformations.push(`f_${options.format}`);
    // }

    // const transformString = transformations.length > 0 ? transformations.join(',') + '/' : '';

    return `${this.baseUrl}/${folderPath}/${imageName}`;
  }

  // Obtener todas las imágenes de un producto
  getAllProductImages(productName: string): string[] {
    return [
      this.getProductImageUrl(productName, 'delantero_v1pmec'),
      this.getProductImageUrl(productName, 'trasero'),
      this.getProductImageUrl(productName, 'caja'),
      this.getProductImageUrl(productName, 'detalles')
    ];
  }

  getProductImagesObject(productName: string) {
    return {
      caja: this.getProductImageUrl(productName, 'caja'),
      delantero: this.getProductImageUrl(productName, 'delantero_v1pmec'),
      trasero: this.getProductImageUrl(productName, 'trasero'),
      detalles: this.getProductImageUrl(productName, 'detalles')
    };
  }
}