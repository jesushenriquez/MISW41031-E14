const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
require('dotenv').config();

// ...


/** 
 * LOGIN GENERAL PARA REUTILIZAR EN TODOS LOS TEST
 * Debe crear un .env con los siguientes datos
 * LOGIN_URL=http://localhost:2368/ghost/#/signin
 * LOGIN_USERNAME=????
 * LOGIN_PASSWORD=????
*/
When("I want to login by env", async function(){
    const loginUrl = process.env.LOGIN_URL;
    const username = process.env.LOGIN_USERNAME;
    const password = process.env.LOGIN_PASSWORD;


    this.driver.url(loginUrl)
    let emailField = await this.driver.$('#identification');
    let passField = await this.driver.$('#password');
    let singInBotton = await this.driver.$(`#ember5`);
    await emailField.setValue(username);
    await passField.setValue(password);
    return await singInBotton.click();
})
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
      
    try {
        await this.driver.$('a[href="#/signout/"]');
        console.log('Inicio de sesión exitoso');
        return true;
    } catch (error) {
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

        When('I enter post Image {string}', async function (body) {
            let element = await this.driver.$('div[data-placeholder="Begin writing your post..."]');
            await element.click();
            await element.click();
            await element.click();
            await element.keys('Enter');
            await element.keys(body);
            return await element.keys('Enter');
        });

    /* 
    * #################################################################
    *                   ENTER PAGE AND CREATE TAG JESUS
    * #################################################################
    */

When('I click on {string}', async function(buttonName) {
    let element;
    if(buttonName == "SIGNIN") {
        element = await this.driver.$('#ember5');
    } else if (buttonName == "TAG") {
        element = await this.driver.$('a[href="#/tags/"].ember-view');
    } else if (buttonName == "NEW_TAG") {
        element = await this.driver.$('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary');
    } else if (buttonName == "SAVE") {
        element = await this.driver.$('button[data-test-button="save"]');
    }else if (buttonName == "PAGE") {
        element = await this.driver.$('a[data-test-nav="pages"]');
    }else if (buttonName == "NEW_PAGE") {
        element = await this.driver.$('a[href="#/editor/page/"]');
    }else if (buttonName == "SAVE_PAGE") {
        element = await this.driver.$('button[data-test-button="publish-flow"]');
    }else if (buttonName == "CONTINUE") {
        element = await this.driver.$('button[data-test-button="continue"]');
    }else if (buttonName == "CONFIRM_PUBLISH") {
        element = await this.driver.$('button[data-test-button="confirm-publish"]');
    }else if (buttonName == "BACK_TO_EDITOR") {
        element = await this.driver.$('button[data-test-button="back-to-editor"]');
    }else if (buttonName == "BACK_TO_PAGES") {
        element = await this.driver.$('a[data-test-link="pages"]');
    }else if (buttonName == "MEMBERS") {
        element = await this.driver.$('a[data-test-nav="members"]');
    }else if (buttonName == "NEW_MEMBER") {
        element = await this.driver.$('a[href="#/members/new/"]');
    }
    
    return await element.click();
})

When('I enter tag name {kraken-string}', async function (string) {
    let element = await this.driver.$('#tag-name');
    return await element.setValue(string);
});

When('I enter tag color {kraken-string}', async function (string) {
    let element = await this.driver.$('input[name="accent-color"]');
    return await element.setValue(string);
});

When('I enter tag slug {kraken-string}', async function (string) {
    let element = await this.driver.$('#tag-slug');
    return await element.setValue(string);
});

When('I enter tag description {kraken-string}', async function (string) {
    let element = await this.driver.$('#tag-description');
    return await element.setValue(string);
});

Then('I check if tag {kraken-string} exists', async function (string) {
    let elements = await this.driver.$$("h3[data-test-tag-name]");
    let result = elements.length > 0;
    expect(result).to.equal(true);
});

When('I enter page name {kraken-string}', async function (string) {
    let element = await this.driver.$('textarea[placeholder="Page title"]');
    return await element.setValue(string);
});

When('I enter page description {kraken-string}', async function (string) {
    let element = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
    return await element.setValue(string);
});

When('I enter page image {kraken-string}', async function (string) {
    let element = await this.driver.$('div[data-placeholder="Begin writing your page..."]');
    await element.click();
    await element.keys(string);
    return await element.keys('Enter');
});

When('I validate image', async function () {
    let element = await this.driver.$('img');
    
    expect(element).to.not.be.null;
});

Then('I check if page untitle exists', async function () {
    let elements = await this.driver.$$("h3[class=gh-content-entry-title]");
    let result = false;
    for(let i = 0; i < elements.length; i++) {
        let text = await elements[i].getText();
        if (text && text.includes("Untitle")) { // add a null/undefined check here
            result = true;
            break;
        }
    }
    expect(result).to.equal(true);
});

Then('I check if page {kraken-string} exists', async function (string) {
    let elements = await this.driver.$$("h3[class=gh-content-entry-title]");
    let result = elements.length > 0;
    expect(result).to.equal(true);
});


When('I enter member name {kraken-string}', async function (string) {
    let element = await this.driver.$('#member-name');
    return await element.setValue(string);
});

When('I enter member email {kraken-string}', async function (string) {
    let element = await this.driver.$('#member-email');
    return await element.setValue(string);
});

When('I enter member note {kraken-string}', async function (string) {
    let element = await this.driver.$('#member-note');
    return await element.setValue(string);
});

Then('I check if member {kraken-string} exists', async function (string) {
    let elements = await this.driver.$('h3.gh-members-list-name');
    let result = elements.length > 0;
    expect(result).to.equal(true);
});

Then('I check errors', async function () {
    let element = await this.driver.$('p[class="response"]');
    let text = await element.getText();
    expect(text).to.equal("You must specify a name for the tag.");
});
