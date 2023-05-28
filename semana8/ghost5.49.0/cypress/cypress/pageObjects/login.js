class Login {

    get  identificacionTxt() { 
        return cy.get("#identification");
    }
    get passwordTxt(){
        return cy.get("#password");
    }
    get enviarBtn(){
        return cy.get("#ember5");
    }

    identificationType(email){
        this.identificacionTxt.type(email);
    }
    passwordType(pass){
        this.passwordTxt.type(pass);
    }
    enviarClick(){
        this.enviarBtn.click();
    }
    checkEnviarIsRetry(){
        this.enviarBtn.contains('Retry');
    }
    checkLoginOk(){
   
        cy.get(
          "body > div.gh-app > div > main > section > div > div > header > h2"
        ).contains("Dashboard");
        cy.log("Inicio de sesión exitoso");
    }
    visit(){
        cy.visit("http://localhost:2369/ghost/#/signin");
    }




}

module.exports = {Login}