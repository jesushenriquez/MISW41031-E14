const { Given, When, Then } = require('@cucumber/cucumber');

When('I enter email {string}', async function (email) {
    let emailField = await this.driver.$('#identification');
    return await emailField.setValue(email);
});


When('I enter password {string}', async function(pass){
    let passField = await this.driver.$('#password');
    return await passField.setValue(pass);
});

When('I click on the button Sing in ->', async function () {
    let button = await this.driver.$(`#ember5`);
    return await button.click();
  });
  
  Then('I should be logged in', async function () {
      
    let welcomeMessageElement = await this.driver.$('.gh-dashboard-zero-message h4');
    let welcomeMessage = await welcomeMessageElement.getText();
  
    if (welcomeMessage.includes('Welcome')) {
      console.log('Inicio de sesión exitoso');
    } else {
        throw new Error('Fallo en el inicio de sesión');
    }
  });

  Then('I should see a button Sing in -> with text Retry',async function(){
    const button = await this.driver.$('#ember5 span');
    const buttonText = await button.getText();
    
    if (buttonText.includes('Retry')){
        console.log("Se muestra el texto correcto cuando no puede iniciar sesion!")
    }else{
        throw new Error('No Se muestra el texto correcto cuando no puede iniciar sesion, en el boton.');
    }
  })