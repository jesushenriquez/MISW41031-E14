# MISW41031-E14

## Integrantes:

| # | Nombre             | Correo                          |
| - | ------------------ | ------------------------------- |
| 1 | Victor Castañeda   | v.castanedap@uniandes.edu.co    |
| 2 | Yojan Hungria      | ys.hungria@uniandes.edu.co      |
| 3 | Daniel Jimenez     | d.jimenez112@uniandes.edu.co    |
| 4 | Jesus Henriquez    | ja.henriquez@uniandes.edu.co    |

## Versiones de Ghost utilizadas:
* Semana 5: ghost:5.40.2
* Semana 6: ghost:3.42

## Metodología:
1. Modificación de los 40 escenarios de prueba de la semana 5 para incluir screenshots en cada paso sobre ghost:5.40.2.
   
2. Selección de 10 escenarios de prueba para ghost:3.42 y selección de la herramienta de ejecución.
   1. Herramienta Utilizada para ejecución:
      1. Cypress
   
   2. Casos de prueba:
      1. Sign-in
      2. Add post
      3. Add post con imagen
      4. Add Page
      5. Add Page con imagen
      6. Add Member
      7. Add Tag
      8. Sing-in fail
      9. Add Tag sin Slug
      10. Add Member sin el campo note
   
3. Desarrollo de los 10 escenarios de pruebas para ghost:3.42 utilizando Cypress.

4. Ejecución de los 40 escenarios de prueba sobre ghost:5.40.2 y los 10 escenarios de prueba sobre ghost:3.42

5. Recopilación de las imágenes de todos los pasos de las ejecuciones de pruebas a través de un artefacto desarrollado en JavaScript.

6. Desarrollo del script de pruebas de regresión visual y generación del reporte final HTML utilizando la herramienta Resemble.js

## Proceso para ejecutar las pruebas:
1. Consideraciones:
   1. Para ejecutar las pruebas de la funcionalidad de Members sobre ghost:3.42, es necesario activar la opción de administrar miembros dentro de la aplicación, siguiendo los pasos:
      1. Levantar la aplicación
      2. Autenticar utilizando correo y contraseña configurados
      3. Ir al dashboard de la aplicación
      4. Ir a la opción "Labs"
      5. Ir a la opción "Members"
      6. Activar el check de administración de members
   
   2. Para la ejecución de las pruebas de Cypress es necesario utilizar NodeJS en una versión 14x y para la ejecución de las pruebas de Reseamble es necesario utilizar NodeJS en una versión 18X
   
   3. Es necesario tener instalado nvm para realizar cambios de versión de NodeJS 
   
   4. Es necesario tener instalado docker y docker-compose 

2. Proceso de ejecución de las pruebas
   1. Clonar el repositorio usando `git clone https://github.com/jesushenriquez/MISW41031-E14.git`
   
   2. Levantar las dos versiones de Ghost utilizando Docker compose:
      1. Ubicarse en la carpeta semana6/docker utilizando el comando: `cd semana6/docker`
      2. Ejecutar el comando: `docker-compose up -d`
   
   3. Para la ejecución de las pruebas de ghost:3.42: 
      1. Ubicarse en la carpeta semana6/ghost3/cypress usando el comando:
         1. `cd semana6/ghost3/cypress/`
   
      2. Para ejecutar este paso asegurar que la versión de NodeJS es la versión 14, para comprobar la versión utilizar el comando: `node --version`
   
      3. Para cambiar la versión de NodeJS ejecutar los comandos:
         1. `nvm install 14`
         2. `nvm use 14`
         3. `node --version`
   
      4. Instalar las dependencias del proyecto usando el comando `npm install` o `yarn install`
   
      5. Para ejecutar las pruebas:
         1. Sistema operativo Windows utilice: `node node_modules/cypress/bin/cypress run`
         2. Sistemas operativos basado en UNIX utilice: `./node_modules/cypress/bin cypress run`
   
   4. Para la ejecución de las pruebas de ghost:5.40.2: 
      1. Ubicarse en la carpeta semana6/ghost3/cypress usando el comando:
         1. `cd semana6/ghost5/cypress/`
   
      2. Para ejecutar este paso asegurar que la versión de NodeJS es la versión 14, para comprobar la versión utilizar el comando: `node --version`
   
      3. Para cambiar la versión de NodeJS ejecutar los comandos:
         1. `nvm install 14`
         2. `nvm use 14`
         3. `node --version`
   
      4. Instalar las dependencias del proyecto usando el comando `npm install` o `yarn install`
   
      5. Para ejecutar las pruebas:
         1. Sistema operativo Windows utilice: `node node_modules/cypress/bin/cypress run`
         2. Sistemas operativos basado en UNIX utilice: `./node_modules/cypress/bin cypress run`
   
   5. Ejecutar el script que extrae los screenshots resultados de las pruebas ejecutadas:
      1. Ubicarse en la carpeta semana6
   
      2. Asegurar tener en uso la versión 18 de NodeJS:
         1. `nvm install 18`
         2. `nvm use 18`
         3. `node --version`
   
      3. Ejecutar utilizando el siguiente comando: `node getPhotos.js`
   
   6. Ejecutar el script para realizar el análisis de regresión visual y generación del reporte
      1. Ubicarse en la carpeta semana6/resemble
      2. Ejecute el siguiente comando: `npm install canvas`
      3. Si el sistema operativo es MACOS, ejecute las siguientes lineas de brew:
         1. `brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman`
      4. Ejecutar el comando: `node index.js`
   
   7. Dentro de la carpeta semana6/resemble/results revisar la carpeta con la fecha más reciente dónde se encentran los resultados de la prueba de regresión visual.
      1. Abrir el archivo report.html en un navegador web donde podrá visualizar el reporte con los resultados de la regresión visual