import requests
import json
import time

# Configuración de Cloudinary
CLOUD_NAME = "dnririxl6"
API_KEY = "846691862243758"
API_SECRET = "wPZ0LxVAN4P_mKUB-UjXWG_rBwo"  # Reemplaza con tu API Secret

# Configuración de SheetDB
SHEETDB_URL = "https://sheetdb.io/api/v1/whviedkl3n13r"

class CloudinaryToSheetDBUpdater:
    def __init__(self, cloud_name, api_key, api_secret, sheetdb_url):
        self.cloud_name = cloud_name
        self.api_key = api_key
        self.api_secret = api_secret
        self.auth = (api_key, api_secret)
        self.sheetdb_url = sheetdb_url
        self.base_url = f"https://api.cloudinary.com/v1_1/{cloud_name}"
    
    def get_sheetdb_data(self):
        """
        Obtiene todos los datos del Google Sheet a través de SheetDB
        """
        try:
            print("Obteniendo datos de Google Sheets...")
            response = requests.get(self.sheetdb_url)
            response.raise_for_status()
            data = response.json()
            print(f"Se obtuvieron {len(data)} productos del sheet")
            return data
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener datos de SheetDB: {e}")
            return []
    
    def get_images_for_product(self, folder_name):
        """
        Obtiene las imágenes de un producto específico usando Search API
        """
        search_expression = f"asset_folder:dabena/{folder_name}"
        
        payload = {
            "expression": search_expression,
            "max_results": 500,
            "resource_type": "image"
        }
        
        url = f"{self.base_url}/resources/search"
        headers = {"Content-Type": "application/json"}
        
        try:
            response = requests.post(url, json=payload, headers=headers, auth=self.auth)
            response.raise_for_status()
            
            data = response.json()
            resources = data.get('resources', [])
            
            # Organizar imágenes por tipo
            images_dict = {
                "caja": None,
                "delantero": None,
                "trasero": None,
                "detalles": None
            }
            
            for resource in resources:
                public_id = resource.get('public_id', '')
                secure_url = resource.get('secure_url', '')
                
                # Extraer el nombre del archivo del public_id
                filename = public_id.split('/')[-1].lower()
                
                # Determinar el tipo basado en el nombre del archivo
                if 'caja_' in filename:
                    images_dict["caja"] = secure_url
                elif 'delantero_' in filename:
                    images_dict["delantero"] = secure_url
                elif 'trasero_' in filename:
                    images_dict["trasero"] = secure_url
                elif 'detalles_' in filename:
                    images_dict["detalles"] = secure_url
            
            print(f"{folder_name}: {sum(1 for v in images_dict.values() if v)} imágenes encontradas")
            return images_dict
            
        except requests.exceptions.RequestException as e:
            print(f"Error al obtener imágenes para {folder_name}: {e}")
            return {"caja": None, "delantero": None, "trasero": None, "detalles": None}
    
    def update_product_images(self, product_id, images_object):
        """
        Actualiza un producto específico en SheetDB con el objeto de imágenes
        """
        # Convertir el objeto de imágenes a JSON string
        images_json = json.dumps(images_object, ensure_ascii=False)
        
        # Datos para actualizar
        update_data = {
            "imagenes": images_json
        }
        
        # URL para actualizar una fila específica por ID
        update_url = f"{self.sheetdb_url}/id/{product_id}"
        
        try:
            response = requests.patch(update_url, json=update_data)
            response.raise_for_status()
            
            print(f"Producto ID {product_id} actualizado correctamente")
            return True
            
        except requests.exceptions.RequestException as e:
            print(f"Error al actualizar producto ID {product_id}: {e}")
            return False
    
    def process_all_products(self):
        """
        Procesa todos los productos: obtiene imágenes y actualiza SheetDB
        """
        print("Iniciando actualización masiva de imágenes...")
        print("=" * 60)
        
        # Obtener datos del sheet
        products = self.get_sheetdb_data()
        if not products:
            print("No se pudieron obtener los productos. Terminando...")
            return
        
        successful_updates = 0
        failed_updates = 0
        
        for i, product in enumerate(products, 1):
            product_id = product.get('id')
            folder_name = product.get('folderCloudinary')
            product_name = product.get('nombre', 'Sin nombre')
            
            if not product_id or not folder_name:
                print(f"Producto {i}: ID o folder faltante - Saltando")
                failed_updates += 1
                continue
            
            print(f"\nProcesando {i}/{len(products)}: {product_name} (ID: {product_id})")
            print(f"Folder: {folder_name}")
            
            # Obtener imágenes de Cloudinary
            images_object = self.get_images_for_product(folder_name)
            
            # Verificar si se encontraron imágenes
            found_images = sum(1 for v in images_object.values() if v)
            if found_images == 0:
                print(f"No se encontraron imágenes para {product_name}")
            
            # Actualizar en SheetDB
            if self.update_product_images(product_id, images_object):
                successful_updates += 1
            else:
                failed_updates += 1
            
            # Pausa breve para no sobrecargar las APIs
            time.sleep(0.5)
        
        # Resumen final
        print("\n" + "=" * 60)
        print("RESUMEN FINAL:")
        print(f"Actualizaciones exitosas: {successful_updates}")
        print(f"Actualizaciones fallidas: {failed_updates}")
        print(f"Total procesados: {len(products)}")
        
        if successful_updates > 0:
            print(f"\n¡Proceso completado! Verifica tu Google Sheet.")
        
        return successful_updates, failed_updates
    
    def preview_process(self, limit=3):
        """
        Hace una vista previa del proceso con los primeros productos
        """
        print("VISTA PREVIA - Procesando solo los primeros productos...")
        print("=" * 60)
        
        products = self.get_sheetdb_data()
        if not products:
            return
        
        preview_products = products[:limit]
        
        for i, product in enumerate(preview_products, 1):
            product_id = product.get('id')
            folder_name = product.get('folderCloudinary')
            product_name = product.get('nombre', 'Sin nombre')
            
            print(f"\n Preview {i}: {product_name}")
            print(f"   ID: {product_id}")
            print(f"   Folder: {folder_name}")
            
            if folder_name:
                images_object = self.get_images_for_product(folder_name)
                print(f"   Imágenes encontradas:")
                for tipo, url in images_object.items():
                    status = "✅" if url else "❌"
                    print(f"     {status} {tipo}: {'Encontrada' if url else 'No encontrada'}")
                
                print(f"   JSON que se guardaría:")
                print(f"   {json.dumps(images_object, indent=2, ensure_ascii=False)}")
            
            print("-" * 40)

def main():
    # Verificar que el API Secret esté configurado
    if API_SECRET == "TU_API_SECRET_AQUI":
        print(" ERROR: Debes configurar tu API_SECRET")
        print("Edita el script y reemplaza 'TU_API_SECRET_AQUI' con tu clave secreta real")
        return
    
    # Crear instancia del actualizador
    updater = CloudinaryToSheetDBUpdater(CLOUD_NAME, API_KEY, API_SECRET, SHEETDB_URL)
    
    # Preguntar al usuario qué quiere hacer
    print(" Cloudinary to SheetDB Image Updater")
    print("=" * 40)
    print("1. Vista previa (solo 3 productos)")
    print("2. Procesar TODOS los productos")
    print("3. Salir")
    
    while True:
        choice = "2"
        
        if choice == "1":
            updater.preview_process()
            break
        elif choice == "2":
            confirm = 'si'
            if confirm in ['sí', 'si', 'yes', 'y']:
                updater.process_all_products()
            else:
                print("Operación cancelada.")
            break
        elif choice == "3":
            print(" ¡Hasta luego!")
            break
        else:
            print(" Opción inválida. Elige 1, 2 o 3.")

if __name__ == "__main__":
    main()