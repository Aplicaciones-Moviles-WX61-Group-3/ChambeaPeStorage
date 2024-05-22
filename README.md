# Chambea Pe Storage
## Descripción
Este proyecto backend fue desarrollado con el fin de almacenar las fotos de los trabajos realizados por los usuarios de la aplicación ChambeaPe.

## Tecnologías
- Node.js
- Express
- MongoDB
- Mongoose
- Multer

## Instalación
1. Clonar el repositorio
```bash
git clone https://github.com/Aplicaciones-Moviles-WX61-Group-3/ChambeaPeStorage.git
```
2. Instalar las dependencias
```bash
npm install
```
3. Crear un archivo `.env` en la raíz del proyecto y luego agregar tus variables de entorno como lo indica el .env.template
```env
SAS_TOKEN = "your_sas_token"
ACCOUNT_NAME = "your_account_name"
CONTAINER_NAME = "your_container_name"

# MongoDb Connection
MONNGO_URI = "your_mongo_uri"
```

## Uso
Para correr el proyecto en modo desarrollo
```bash
npm run dev
```

## Endpoints
Tenemos todo el **CRUD** para el manejo de las fotos de los trabajos realizados por los usuarios.

### Para "Users"
La Url base es: `https://chambea-backend-storage.azurewebsites.net/api/users/`
- **GET** 
    - `/` : **Obtiene a los usuarios**.
    - `/:id` : Obtiene a un usuario por su id.
<br>

- **POST**
    - `/` 
        - **Crea un nuevo usuario**.
        - El body debe ser un json con la siguiente estructura:
            ```json
            {
                "id_user": 1
            }
            ```
<br>

- **PATCH**
    - `/:id_user/addImageUrl` 
        - **Agrega una imagen al usuario.**

        - Este endpoint utiliza Multer para manejar la subida de archivos, en este caso imágenes (jpg, png) y este se encarga de subir la imagen a un contenedor de Azure Storage y luego se guarda la url de la imagen en la base de datos.

        - Por lo tanto el frontend debe enviar un FormData con la imagen a subir.

    - `/:id_user/removeImageUrl`
        - **Agrega una imagen al usuario.**
        - El body debe ser un json con la siguiente estructura:
            ```json
            {
                "imageUrl": "https://url.com"
            }
            ```
<br>

- **DELETE**
    - `/:id`
        - **Elimina a un usuario por su id.**
        - Este endpoint elimina al usuario de la base de datos y también elimina la imagen del contenedor de Azure Storage.