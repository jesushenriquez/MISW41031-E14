# MISW41031-E14

## Funcionalidades:

| # | Funcionalidad      |
| - | ------------------ |
| 1 | Sign in (Admin)    |
| 2 | New Member (Admin) |
| 3 | Add Post           |
| 4 | Create Tag         |
| 5 | Add Page           |


## Escenarios:
| Funcionalidad      | Nombre del escenario                                                                       | Responsable      |
| ------------------ | ------------------------------------------------------------------------------------------ | ---------------- |
| Add Page           | Registrar y publir una nueva pagina                                                        | Jesus Henriquez  |
| Add Page           | Registrar Pagina con imagen                                                                | Jesus Henriquez  |
| Add Page           | Registrar Pagina sin Titulo                                                                | Jesus Henriquez  |
| Add Page           | Registrar Pagina sin foto             | Victor Castañeda |
| Add Post           | Registrar y Publicar un nuevo Post                                                         | Daniel Jimenez   |
| Add Post           | Registrar y Publicar un nuevo Post con Imagen                                              | Daniel Jimenez   |
| Add Post           | Registrar y publir un nuevo Post con boton                                                 | Daniel Jimenez   |
| Add Post           |                                                                                            | Yojan Hungria    |
| Create Tag         | Crear un nuevo tag desde el panel de Tags                                                  | Jesus Henriquez  |
| Create Tag         | Crear un nuevo tag desde el panel de Tags sin datos en los campos                          | Jesus Henriquez  |
| Create Tag         | Crear un nuevo tag sin el campo Slug            | Victor Castañeda |
| Create Tag         |                                                                                            | Yojan Hungria    |
| New Member (Admin) | Crear un miembro del blog desde el panel de administración en el modulo Members            | Victor Castañeda |
| New Member (Admin) | Crear un miembro del blog desde el panel de administración en el modulo Members, sin datos | Victor Castañeda |
| New Member (Admin) | Crear un miembro del blog desde el panel de administración sin el campo labels | Victor Castañeda |
| New Member (Admin) |                                                                                            | Yojan Hungria    |
| Sign in (Admin)    | Iniciar sesión en el dashboard administrativo con un email y password existente y validos  | Daniel Jimenez   |
| Sign in (Admin)    | Iniciar sesión en el dashboard administrativo con un email y password invalidos            | Daniel Jimenez   |
| Sign in (Admin)    |                                                                                            | Yojan Hungria    |
| Sign in (Admin)    |                                                                                            | Yojan Hungria    |

## Como ejecutar el proyecto en Cypress

### Prerequisitos

* Tener instalado Cypress en tu entorno global.

### Pasos

1. Ubicarse dentro de la carpeta cypress `cd cypress`.
2. Ejecutar comando `cypress open`.
3. Hacer click en Add Project y buscar la carpeta cypress de este repositorio, donde esta ubicado el archivo `cypress.config.js`.

## Como ejecutar el proyecto en Kraken

### Prerequisitos
* Node v14.X.X

### Pasos

1. Ubicarse dentro de la carpeta kraken `cd kraken`.
2. Configurar variable de entorno `ANDROID_HOME`.
```
export ANDROID_HOME=<path_android_home> (Ejemplo: $HOME/Library/Android/sdk)
export PATH=$ANDROID_HOME/platform-tools:$PATH
export PATH=$ANDROID_HOME/tools:$PATH
export PATH=$ANDROID_HOME/tools/bin:$PATH
```
3. Instalar appium `npm install -g appium`.
4. Verificar proyecto con `kraken-node doctor` o si lo tiene instalado local `./node_modules/kraken-node/bin/kraken-node doctor`.
5. Ejecutar pruebas con `kraken-node run` o `./node_modules/kraken-node/bin/kraken-node run`