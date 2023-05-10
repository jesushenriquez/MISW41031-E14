function signIn() {
    cy.visit('http://localhost:2368/ghost/#/signin');
    cy.wait(1000);
    cy.get('#identification').type("test@test.com");
    cy.get('#password').type("pnz5nrp.put7jxt_DCH");
    cy.get('#ember5').click();
  }

function screenshot(feature, scenario, step) {
  cy.screenshot(`${feature} - ${scenario} - ${step}`)
}
  module.exports = { signIn, screenshot };
  