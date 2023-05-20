function signIn() {
  /***
   * -------------------------------------------------------
   * Si configuras este tiempo de espera mas corto, corres el riesgo de que se bloquee el inicio de sesion de Ghost.
   * Only 100 tries per IP address every 3600 seconds. 
   */
  cy.visit("http://localhost:2368/ghost/#/signin");
  //cy.wait(3000);
  cy.get("#identification").type("test@test.com");
  cy.get("#password").type("pnz5nrp.put7jxt_DCH");
  cy.get("#ember5").click();
}

function screenshot(feature, scenario, step) {
  cy.screenshot(`${feature} - ${scenario} - ${step}`)
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

module.exports = { signIn, screenshot, randomIntFromInterval };
  