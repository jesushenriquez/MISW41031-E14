const { screenshot } = require('../../support/utils');

describe('Sign-in', function() {
    beforeEach(() => {
      cy.fixture('sign-in.json').as('loginData');
    });
  
    it('Intento de inicio de sesion fallido', function() {
      let screen = screenshot.bind(null, "Sign-in", "Intento de inicio de sesion fallido");
      cy.visit('http://localhost:2368/ghost/#/signin');
      screen("paso1");
      cy.get('#identification').type('email@Mal.com');
      screen("paso2");
      cy.get('#password').type('passmal');
      screen("paso3");
      cy.get('#ember5').click();
      screen("paso4");
      cy.get('#ember5').contains('Retry');
      screen("paso5");
    });
  

    it('Intento de inicio de sesion solo ingresando email', function() {
      let screen = screenshot.bind(null, "Sign-in", "Intento de inicio de sesion solo ingresando email");
      cy.get('@loginData').then((loginData) => {
          const { LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
          screen("paso1");
          cy.visit(LOGIN_URL);
          screen("paso2");
          cy.get('#identification').type(LOGIN_USERNAME);
          screen("paso3");
          cy.get("#ember5").click();
          screen("paso4");
          cy.get('#ember5').contains('Retry');
      });
    }); 
    it('Intento de inicio de sesion solo ingresando pass', function() {
      let screen = screenshot.bind(null, "Sign-in", "Intento de inicio de sesion solo ingresando pass");
      cy.get('@loginData').then((loginData) => {
          const { LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
          screen("paso1");
          cy.visit(LOGIN_URL);
          screen("paso2");
          cy.get('#password').type(LOGIN_PASSWORD);
          screen("paso3");
          cy.get("#ember5").click();
          screen("paso4");
          cy.get('#ember5').contains('Retry');
      });
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
        cy.get('.ember-basic-dropdown-trigger',{timeout:10000}).click({multiple:true});
        screen("paso5");
        cy.get('a[href="#/signout/"]').should('exist');
        screen("paso6");
        cy.log('Inicio de sesión exitoso');
        screen("paso7");
      });
    });
  });