describe('Sign-in', function() {
    beforeEach(() => {
      cy.fixture('sign-in.json').as('loginData');
    });
  
   /*  it('Intento de inicio de sesion fallido', function() {
      cy.visit('http://localhost:2368/ghost/#/signin');
      cy.wait(1000);
      cy.get('#identification').type('email@Mal.com');
      cy.get('#password').type('passmal');
      cy.get('#ember5').click();
      cy.wait(1000);
      cy.get('#ember5').contains('Retry');
      cy.wait(1000);
    }); */
  
    it('Iniciar sesión en el dashboard administrativo con un email y password existente y válidos', function() {
      cy.get('@loginData').then((loginData) => {
        const { LOGIN_URL, LOGIN_USERNAME, LOGIN_PASSWORD } = loginData;
        cy.visit(LOGIN_URL);
        cy.wait(1000);
        cy.get('#identification').type(LOGIN_USERNAME);
        cy.get('#password').type(LOGIN_PASSWORD);
        cy.get('#ember5').click();
        cy.wait(5000);
        
        cy.get('div.ember-basic-dropdown-trigger').click();
        cy.get('a[href="#/signout/"]').should('exist');
        cy.log('Inicio de sesión exitoso');
      });
    });
  });