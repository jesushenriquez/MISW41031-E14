const { Given, When, Then } = require('@cucumber/cucumber');


Given('I nagigate to page {string}', function (string) {
    return this.driver.url(string)
  });

When('I enter email {string}', async function (email) {
    let element = await this.driver.$('#email');
    return await element.setValue(email);
});