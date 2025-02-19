# GestionSubscripciones

Este proyecto es una aplicación desarrollada en **Java** utilizando el framework **Spring Boot**. Su objetivo principal es gestionar suscripciones de usuarios a diferentes servicios, proporcionando una API RESTful para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre las suscripciones disponibles.

## Características

- **Gestión de Suscripciones**: Permite la creación, consulta, actualización y eliminación de suscripciones de usuarios a diversos servicios.
- **API RESTful**: Exposición de endpoints para interactuar con los datos de las suscripciones de manera sencilla y eficiente.
- **Persistencia de Datos**: Utiliza una base de datos para almacenar la información de las suscripciones de usuarios.

## Estructura del Proyecto

El proyecto está organizado en los siguientes directorios y archivos principales:

- `controllers/`: Contiene los controladores que gestionan la lógica de negocio de las suscripciones.
- `models/`: Define los modelos de datos y las interacciones con la base de datos.
- `repositories/`: Contiene las interfaces que gestionan la persistencia de datos.
- `services/`: Implementa la lógica de negocio y las operaciones sobre los modelos de datos.
- `src/main/resources/`: Contiene los archivos de configuración y recursos estáticos.
- `src/main/java/`: Contiene el código fuente de la aplicación.

## Requisitos Previos

- **Java Development Kit (JDK)**: Asegúrate de tener instalado JDK 8 o superior en tu sistema. Puedes descargarlo desde [Oracle](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) o [OpenJDK](https://openjdk.java.net/install/).
- **Maven**: Herramienta de gestión y construcción de proyectos Java. Puedes descargarla desde [aquí](https://maven.apache.org/download.cgi).

## Cómo Ejecutar el Proyecto

1. **Clonar el repositorio**:   
   git clone https://github.com/Methazod/GestionSubscripciones.git
   cd GestionSubscripciones
   
## Endpoints de la API
-  **GET /suscripciones**: Obtiene todas las suscripciones de usuarios.
-  **GET /suscripciones/{id}**: Obtiene una suscripción específica por su ID.
-  **POST /suscripciones**: Crea una nueva suscripción.
-  **PUT /suscripciones/{id}**: Actualiza una suscripción existente.
-  **DELETE /suscripciones/{id}**: Elimina una suscripción específica.

## Contribuciones
Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función o corrección:
   git checkout -b nombre-de-tu-rama
3. Realiza tus cambios y haz commits descriptivos.
4. Envía un pull request detallando tus modificaciones.
