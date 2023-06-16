# Desarrollo de actividades del módulo de Bundling

En este repo se realiza las actividades para aprobar el módulo de Bundling del Master en Frontend de Lemoncode.

En está unidad vimos temas como:
- Webpack 
- Parcel
- Vite

Este monorepo contiene varios proyectos con diferentes herramientas de empaquetado y construcción, como Webpack, Parcel y Vite. 
Cada proyecto se encuentra en su directorio correspondiente.

## Proyectos

### Proyecto con Webpack

El directorio `/basic` y `/optional` contiene las soluciones configuradas con Webpack 5. 

- En `/basic` encontrarás: el bundle que ejecuta TypeScript, CSS y Sass, procesa imagenes, contiene un servidor para desarrollo y tiene un paquete para producción.

- En `/optional` encontrarás: el bundle que ejecuta React con TypeScript, CSS y Sass, tiene la configuración para desarrollo y producción, de la misma manera sus variables de entorno para desarrollo y producción y mide cuanto ocupa el bundle con el script  "build:perf". 

 
### Proyecto con Parcel

El directorio `/parcel-proyect` contiene un proyecto configurado con Parcel. En este directorio encontrarás el mismo ejercicio anterior pero desarrollado con Parcel. 

### Proyecto con Vite

El directorio `/seed-project` contiene un proyecto configurado con Vite. Acá se realizo el bundle para un proyecto semilla que procesa TypeScript con SASS. 

## Requisitos

- Node.js (versión >= 16.X.X)

## Instrucciones de Uso

1. Clona este repositorio en tu máquina local:

2. Navega al directorio del proyecto que desees utilizar: 
``` shell 
cd basic
```

3. Instala las dependencias del proyecto: 
``` shell
npm install
```

4. Ejecuta el comando para iniciar el proyecto: 
``` shell
npm start
```

5. Abre tu navegador y accede a la URL proporcionada en la consola para ver la aplicación en funcionamiento.


## Licencia

Este proyecto está licenciado bajo MIT. Consulta el archivo LICENSE para obtener más información.



