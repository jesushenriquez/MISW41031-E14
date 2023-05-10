const { screenshot } = require('../../support/utils');

describe('Sign-in', function() {
    beforeEach(() => {
      cy.fixture('sign-in.json').as('loginData');
    });
  
    it('Intento de inicio de sesion fallido', function() {
      let screen = screenshot.bind(null, "Sign-in", "Intento de inicio de sesion fallido");
      cy.visit('http://localhost:2368/ghost/#/signin');
      cy.wait(1000);
      screen("paso1");
      cy.get('#identification').type('email@Mal.com');
      screen("paso2");
      cy.get('#password').type('passmal');
      screen("paso3");
      cy.get('#ember5').click();
      cy.wait(1000);
      screen("paso4");
      cy.get('#ember5').contains('Retry');
      cy.wait(1000);
      screen("paso5");
    });
  
    it('Iniciar sesión en el dashboard administrativo con un email y password existente y válidos', function() {
      let screen = screenshot.bind(null, "Sign-in", "Iniciar sesión en el dashboard administrativo con un email y password existente y válidos");
      cy.get('@loginData').then((loginData) => {
        const { LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
        cy.visit(LOGIN_URL);
        cy.wait(1000);
        screen("paso1");
        cy.get('#identification').type(LOGIN_USERNAME);
        screen("paso2");
        cy.get('#password').type(LOGIN_PASSWORD);
        screen("paso3");
        cy.get('#ember5').click();
        cy.wait(5000);
        screen("paso4");
        cy.get('div.ember-basic-dropdown-trigger').click();
        screen("paso5");
        cy.get('a[href="#/signout/"]').should('exist');
        screen("paso6");
        cy.log('Inicio de sesión exitoso');
        screen("paso7");
      });
    });
  });