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

2. Proceso de ejecución de las pruebas:
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

**Para verificar la descripcción de la estrategia de pruebas de la semana puede dirigirse a la wiki del repositorio utilizando el siguiente link https://github.com/jesushenriquez/MISW41031-E14/wiki

##  Definición de estrategia de pruebas:

* A continuación, se proporciona el enlace al documento en formato Word que contiene la descripción de la estrategia de pruebas. [Documento](https://uniandes-my.sharepoint.com/:w:/g/personal/ja_henriquez_uniandes_edu_co/EUStt9qj34dPoJzgAeIsAKEB5omaXX4KnhNO0w6APXTZkw?e=XCd4fE)

Además, este documento también se encuentra disponible en el repositorio mencionado: ["Estrategia_de_Pruebas.pdf"]()

## Inventario de pruebas manuales:

A continuación, se adjunta el enlace al archivo de Excel que contiene el registro de pruebas manuales: [Archivo Excel - "Escenarios PE"]()

#### Reporte de Issues:

Dentro del repositorio, en la sección de "Issues", se encuentra disponible la pestaña correspondiente. [Issues](https://github.com/jesushenriquez/MISW41031-E14/issues), En la pestaña de "Issues" del repositorio se pueden encontrar los defectos identificados durante la ejecución de la estrategia de pruebas.





