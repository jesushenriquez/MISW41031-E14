const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter email {kraken-string}', async function (email) {
    let element = await this.driver.$('#identification');
    return await element.setValue(email);
});

When('I enter password {kraken-string}', async function (password) {
    let element = await this.driver.$('#password');
    return await element.setValue(password);
});

When('I click on {string}', async function(buttonName) {
    let element;
    if(buttonName == "SIGNIN") {
        element = await this.driver.$('#ember5');
    } else if (buttonName == "TAG") {
        element = await this.driver.$('#ember30');
    } else if (buttonName == "NEW_TAG") {
        element = await this.driver.$('#ember57');
    } else if (buttonName == "SAVE") {
        element = await this.driver.$('button[data-test-button="save"]');
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