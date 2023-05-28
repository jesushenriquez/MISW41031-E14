# Pasos para la ejecución del monkey
Antes de iniciar con la explicación de como ejecutar el monkey desarrollado me parece importante mencionar que en la actividad existe algunos enunciados desactualizados, afortunadamente no es tan grave.

Por favor siga los siguientes pasos y validaciones para poder ejecutar el monkey:

1. Para poder ejecutar el monkey desarrollado es importante tener cypress en las siguiente versión:
- Cypress package version: 12.11.0
- Cypress binary version: 12.11.0
- Electron version: 21.0.0
- Bundled Node version: 16.16.0

2. Abrir cypress con `cypress open` y hacer click en el boton "Add project" y seleccionar el directorio donde tenemos nuestro archivo cypress.config.js.
3. Luego hacer click en la sección donde dice E2E Testing.
4. Seleccionar Chrome y luego hacer click en el boton "Start E2E Testing in Chrome".
5. Esto abrira una ventana de Chrome en el apartado de Specs.
6. Hacer click en la pantalla en el archivo monkey_testing.cy.js.
7. Esto ejecutara las pruebas del monkey inmediatamente.

Nota: Es importante mencionar que se cuentan con los siguientes eventos:
- Hacer click en un link al azar
- Llenar un campo de texto al azar
- Seleccionar un combo al azar
- Hacer click en un botón al azar

Si en la pagina a testear no existe algun elemento que se inspecciona y se interactua el test en particular fallara.