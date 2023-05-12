function signIn() {
    cy.visit('http://localhost:2369/ghost/#/signin');
    cy.wait(1000);
    cy.get(".email[type='email']").type("test@test.com");
    cy.get(".password[type='password']").type("pnz5nrp.put7jxt_DCH");
    cy.get(".login[type='submit']").click();
  }
  
  module.exports = { signIn };
  