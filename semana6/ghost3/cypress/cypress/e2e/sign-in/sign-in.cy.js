describe('Sign-in', function() {
    beforeEach(() => {
      cy.fixture('sign-in.json').as('loginData');
    });

    it('Intento de inicio de sesion fallido', function() {
      cy.visit('http://localhost:2369/ghost/#/signin');
      cy.get(".email[type='email']").type('email@Mal.com');
      cy.get(".password[type='password']").type('passmal');
      cy.get(".login[type='submit']").click();
      cy.get(".login[type='submit']").contains('Retry');
    }); 
  
    it('Iniciar sesión en el dashboard administrativo con un email y password existente y válidos', function() {

      Cypress.on('uncaught:exception', (err, runnable) => {
        /**
         * Se controla que al presentarse la excepcion no capturada por Ghost al 
         * momento de dar click en el campo para desplegar el menu que permite cerrar 
         * sesion se pueda continuar con el test estod debido a que no es un error 
         * bloqueante pero si detenia la ejecucion del caso.
         */
        if (err.message.includes('n.includes is not a function')) {
          return false;
        }
      })

      cy.get('@loginData').then((loginData) => {
        const { LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
        cy.visit(LOGIN_URL);
        cy.get(".email[type='email']").type(LOGIN_USERNAME);
        cy.get(".password[type='password']").type(LOGIN_PASSWORD);
        cy.get(".login[type='submit']").click();
        cy.get('.ember-basic-dropdown-trigger').click();
        cy.get('a[href="#/signout/"]').should('exist');
        cy.log('Inicio de sesión exitoso'); 
      });
    });
  });