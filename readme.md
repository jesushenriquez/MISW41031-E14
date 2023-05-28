# MISW41031-E14

##  Implementación del plan con asignación de tareas:

Se implementó un plan en el cual cada ingeniero llevó a cabo las siguientes tareas:

```
1. Familiarización con la aplicación a ser probada.
2. Configuración del entorno de trabajo.
3. Elaboración de un inventario de pruebas manuales.
4. Desarrollo de pruebas manuales.
5. Documentación de los problemas identificados.
6. Creación de pruebas end-to-end (E2E).
7. Ejecución y validación de las pruebas E2E.
8. Documentación adicional de los problemas identificados.
9. Revisión de los resultados de las pruebas y análisis de los hallazgos.
10. Realización de ajustes y mejoras en las pruebas según los problemas identificados.
11. Seguimiento y actualización de la documentación de los problemas resueltos.
```

## Integrantes:

| # | Nombre             | Correo                          |
| - | ------------------ | ------------------------------- |
| 1 | Victor Castañeda   | v.castanedap@uniandes.edu.co    |
| 2 | Yojan Hungria      | ys.hungria@uniandes.edu.co      |
| 3 | Daniel Jimenez     | d.jimenez112@uniandes.edu.co    |
| 4 | Jesus Henriquez    | ja.henriquez@uniandes.edu.co    |

## Proceso para ejecutar las pruebas:
1. Consideraciones:
   
   1. Para la ejecución de las pruebas de Cypress es necesario utilizar NodeJS en una versión 14x.
   
   2. Es necesario tener instalado docker y docker-compose 

2. Proceso de ejecución de pruebas:
   1. Proceso de ejecución de las pruebas ghost:5.40.2:
      1. Clonar el repositorio usando `git clone https://github.com/jesushenriquez/MISW41031-E14.git`
      
      2. Levantar Ghost utilizando Docker compose:
         1. Ubicarse en la carpeta semana8/docker utilizando el comando: `cd semana8/docker`
         2. Ejecutar el comando: `docker-compose up -d`
      
      3. Para la ejecución de las pruebas de ghost:5.40.2: 
         1. Ubicarse en la carpeta semana8/ghost5.40.2/cypress usando el comando:
            1. `cd semana8/ghost5.40.2/cypress/`
      
         2. Para ejecutar este paso asegurar que la versión de NodeJS es la versión 14, para comprobar la versión utilizar el comando: `node --version`
      
         3. Instalar las dependencias del proyecto usando el comando `npm install` o `yarn install`
      
         4. Para ejecutar las pruebas:
            1. Sistema operativo Windows utilice: `node node_modules/cypress/bin/cypress run`
            2. Sistemas operativos basado en UNIX utilice: `./node_modules/cypress/bin cypress run`

   2. Proceso de ejecución de las pruebas ghost:5.49.0:
      1. Clonar el repositorio usando `git clone https://github.com/jesushenriquez/MISW41031-E14.git`
      
      2. Levantar Ghost utilizando Docker compose:
         1. Ubicarse en la carpeta semana8/docker utilizando el comando: `cd semana8/docker`
         2. Ejecutar el comando: `docker-compose up -d`
      
      3. Para la ejecución de las pruebas de ghost:5.49.0: 
         1. Ubicarse en la carpeta semana8/ghost5.49.0/cypress usando el comando:
            1. `cd semana8/ghost5.49.0/cypress/`
      
         2. Para ejecutar este paso asegurar que la versión de NodeJS es la versión 14, para comprobar la versión utilizar el comando: `node --version`
      
         3. Instalar las dependencias del proyecto usando el comando `npm install` o `yarn install`
      
         4. Para ejecutar las pruebas:
            1. Sistema operativo Windows utilice: `node node_modules/cypress/bin/cypress run`
            2. Sistemas operativos basado en UNIX utilice: `./node_modules/cypress/bin cypress run`

   3. Ejecutar el script que extrae los screenshots resultados de las pruebas ejecutadas:
         1. Ubicarse en la carpeta semana8
      
         2. Asegurar tener en uso la versión 18 de NodeJS:
            1. `nvm install 18`
            2. `nvm use 18`
            3. `node --version`
      
         3. Ejecutar utilizando el siguiente comando: `node getPhotos.js`
      
      1. Ejecutar el script para realizar el análisis de regresión visual y generación del reporte
         1. Ubicarse en la carpeta semana8/resemble
         2. Ejecute el siguiente comando: `npm install canvas`
         3. Si el sistema operativo es MACOS, ejecute las siguientes lineas de brew:
            1. `brew install pkg-config cairo pango libpng jpeg giflib librsvg pixman`
         4. Ejecutar el comando: `node index.js`
      
      2. Dentro de la carpeta semana8/resemble/results revisar la carpeta con la fecha más reciente dónde se encentran los resultados de la prueba de regresión visual.
         1. Abrir el archivo report.html en un navegador web donde podrá visualizar el reporte con los resultados de la regresión visual


   6. Pasos para la ejecución del monkey
   Antes de iniciar con la explicación de como ejecutar el monkey desarrollado me parece importante mencionar que en la actividad existe algunos enunciados desactualizados, afortunadamente no es tan grave.

   Por favor siga los siguientes pasos y validaciones para poder ejecutar el monkey:

      1. Para poder ejecutar el monkey desarrollado es importante instalar todas las dependencias de npm con `npm install`.

      2. Abrir cypress con `./node_modules/cypress/bin/cypress open`.
      3. Luego hacer click en la sección donde dice E2E Testing.
      4.  Seleccionar Chrome y luego hacer click en el boton "Start E2E Testing in Chrome".
      5.  Esto abrira una ventana de Chrome en el apartado de Specs.
      6.  Hacer click en la pantalla en el archivo monkey_testing.cy.js.
      7.  Esto ejecutara las pruebas del monkey inmediatamente.

      Nota: Es importante mencionar que se cuentan con los siguientes eventos:
      - Hacer click en un link al azar
      - Llenar un campo de texto al azar
      - Seleccionar un combo al azar
      - Hacer click en un botón al azar

      Si en la pagina a testear no existe algun elemento que se inspecciona y se interactua el test en particular fallara.

**Es importante mencionar que los test de las estrategias de generación de datos aleatoria, las url de los recursos como youtube, spotify, etc. Al ser url no validas, no se van a visualizar los elementos embebidos dentro de las Pages y Posts.**

**Para la ejecución de los escenarios de prueba de la actual semana no se encontraron hallazgos en los que los escenarios de pruebas fallaran, por ende, no fueron reportados en la sección de issues del repositorio.

**En el desarrollo de la estrategia de pruebas de la semana participaron los integrantes: Jesus Henriquez, Daniel Jimenez y Victor Castañeda.

**Para verificar la descripcción de la estrategia de pruebas de la semana puede dirigirse a la wiki del repositorio utilizando el siguiente link https://github.com/jesushenriquez/MISW41031-E14/wiki

##  Definición de estrategia de pruebas:

* A continuación, se proporciona el enlace al documento en formato Word que contiene la descripción de la estrategia de pruebas. [Documento](https://uniandes-my.sharepoint.com/:w:/g/personal/ja_henriquez_uniandes_edu_co/EUStt9qj34dPoJzgAeIsAKEB5omaXX4KnhNO0w6APXTZkw?e=XCd4fE)

Además, este documento también se encuentra disponible en el repositorio mencionado: ["Estrategia_de_Pruebas.pdf"]()

## Inventario de pruebas manuales:

A continuación, se adjunta el enlace al archivo de Excel que contiene el registro de pruebas manuales: [Archivo Excel - "Escenarios PE"](https://uniandes-my.sharepoint.com/:x:/r/personal/ja_henriquez_uniandes_edu_co/_layouts/15[…]s-exploratorias.xlsx&action=default&mobileredirect=true)

#### Reporte de Issues:

Dentro del repositorio, en la sección de "Issues", se encuentra disponible la pestaña correspondiente. [Issues](https://github.com/jesushenriquez/MISW41031-E14/issues), En la pestaña de "Issues" del repositorio se pueden encontrar los defectos identificados durante la ejecución de la estrategia de pruebas.


## Resultado de las pruebas de regresión visual:

A continuación, se adjunta el adjuto del resultado de las pruebas de regresión visual: [Archivo.zip - "Results.zip"](https://uniandes-my.sharepoint.com/personal/ja_henriquez_uniandes_edu_co/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fja%5Fhenriquez%5Funiandes%5Fedu%5Fco%2FDocuments%2F1%20semestre%2FPruebas%20Automatizadas%2FProyecto%20%2D%20Pruebas%20Automatizadas%2FSemana%208%2Fresults%2Ezip&parent=%2Fpersonal%2Fja%5Fhenriquez%5Funiandes%5Fedu%5Fco%2FDocuments%2F1%20semestre%2FPruebas%20Automatizadas%2FProyecto%20%2D%20Pruebas%20Automatizadas%2FSemana%208&ct=1685288562195&or=Teams%2DHL&ga=1&LOF=1)


## Link al video de Explicación:

A continuación, se adjunta el video de explicación: [Video de explicación - "Semana8"]()