const { signIn, screenshot } = require('../../support/utils');




describe('Add Tags', function() {
    it('Crear un nuevo tag desde el panel de Tags', function() {
        signIn();
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 1")
        cy.get('a[href="#/tags/"].ember-view').click();
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 2")
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 3")
        cy.get('#tag-name').type("Tag 1 - Test");
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 4")
        cy.get('#tag-slug').type("-");
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 5")
        cy.get('#tag-description').type("This is an example of description");
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 6")
        cy.get('button[data-test-button="save"]').click();
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 7")
        cy.get('a[href="#/tags/"].ember-view').first().click();
        screenshot("Add Tags", "Crear un nuevo tag desde el panel de Tags", "Paso 8")
        cy.wait(2000)
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })

    it('Crear un nuevo tag desde el panel de Tags sin datos en los campos', function() {
        signIn();
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.screenshot()
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.screenshot()
        cy.get('button[data-test-button="save"]').click();
        cy.get('p[class="response"]').should('include.text', 'You must specify a name for the tag.');
    })
    it('Crear un nuevo tag desde el panel de Tags sin campo slug', function() {
        signIn();
        cy.wait(1000);
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.wait(1000);
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.wait(1000);
        cy.get('#tag-name').type("Tag 1 - Test");
        cy.wait(1000);
        cy.get('#tag-description').type("This is an example of description");
        cy.wait(1000);
        cy.get('button[data-test-button="save"]').click();
        cy.wait(1000);
        cy.get('a[href="#/tags/"].ember-view').first().click();
        cy.wait(2000);
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })
})