# MISW41031-E14

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

2. Proceso de ejecución de las pruebas
   1. Clonar el repositorio usando `git clone https://github.com/jesushenriquez/MISW41031-E14.git`
   
   2. Levantar Ghost utilizando Docker compose:
      1. Ubicarse en la carpeta semana6/docker utilizando el comando: `cd semana7/docker`
      2. Ejecutar el comando: `docker-compose up -d`
   
   3. Para la ejecución de las pruebas de ghost:5: 
      1. Ubicarse en la carpeta semana6/ghost3/cypress usando el comando:
         1. `cd semana7/ghost5/cypress/`
   
      2. Para ejecutar este paso asegurar que la versión de NodeJS es la versión 14, para comprobar la versión utilizar el comando: `node --version`
   
      3. Instalar las dependencias del proyecto usando el comando `npm install` o `yarn install`
   
      4. Para ejecutar las pruebas:
         1. Sistema operativo Windows utilice: `node node_modules/cypress/bin/cypress run`
         2. Sistemas operativos basado en UNIX utilice: `./node_modules/cypress/bin cypress run`

**Es importante mencionar que los test de las estrategias de generación de datos aleatoria, las url de los recursos como youtube, spotify, etc. Al ser url no validas, no se van a visualizar los elementos embebidos dentro de las Pages y Posts.**

**Para la ejecución de los escenarios de prueba de la actual semana no se encontraron hallazgos en los que los escenarios de pruebas fallaran, por ende, no fueron reportados en la sección de issues del repositorio.

**En el desarrollo de la estrategia de pruebas de la semana participaron los integrantes: Jesus Henriquez, Daniel Jimenez y Victor Castañeda.
