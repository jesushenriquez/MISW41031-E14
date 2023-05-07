const { Given, When, Then } = require('@cucumber/cucumber');

/* 
 * #################################################################
 *                              LOGIN 
 * #################################################################
 */
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

    /* 
    * #################################################################
    *                              ADD POST 
    * #################################################################
    */

    When('I click on the plus button in the Menu',async function(){
        const button = await this.driver.$('[title="New post"]');
        button.click();
    });

    Then('I check load Post Create form', async function(){
        const textareaElement = await this.driver.$('textarea[data-test-editor-title-input]');
        const placeholderValue = await textareaElement.getAttribute('placeholder');
        if(placeholderValue === "Post title"){
            console.log("Formulario Post Cargo correctamente")
        }else{
            throw new Error('No cargo el formulario de Post');
        }
    });

    When('I enter title {string}', async function (title) {
        const textareaElement = await this.driver.$('textarea[data-test-editor-title-input]');
        return await textareaElement.setValue(title);
    });


    When('I enter Body {string}', async function (body) {
        const article = await this.driver.$('article.koenig-editor');
        const paragraph = await article.$('p[data-koenig-dnd-droppable="true"]');

        await paragraph.click();
        await paragraph.keys(body);
    });

    When("I click on publish",async function(){
        const buttonPublish = await this.driver.$("header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger");
        buttonPublish.click();
    })

    When("I click on Continue, final review", async function(){
        const buttonPublish = await this.driver.$("div > div > div.gh-publish-cta > button");
        buttonPublish.click()
        
    })

    Then('I wait until {string} is visible', async function (selector) {
        await browser.waitUntil(async () => {
          const element = await $(selector);
          return element.isDisplayed();
        }, { timeout: 5000, timeoutMsg: `Element ${selector} is not visible` });
      });


      When("I click on confirm publish", async function(){
        const confirmPublishButtonElement = await this.driver.$('button[data-test-button="confirm-publish"]');
        confirmPublishButtonElement.click()
      })

     

      Then("I validate text of title {string}", async function(savedTitle) {
   
        const titleElement = await this.driver.$('.gh-post-bookmark-title');
        const titleText = await titleElement.getText();
     
        
        if (titleText === savedTitle) {
          console.log("El texto coincide.");
        } else {
            throw new Error("El texto no coincide.");
        }
      });