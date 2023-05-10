const { signIn, screenshot } = require('../../support/utils');

describe('Add Tags', function() {
    it('Crear un nuevo tag desde el panel de Tags', function() {
        let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/tags/"].ember-view').click();
        screen("Paso 2");
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        screen("Paso 3");
        cy.get('#tag-name').type("Tag 1 - Test");
        screen("Paso 4");
        cy.get('#tag-slug').type("-");
        screen("Paso 5");
        cy.get('#tag-description').type("This is an example of description");
        screen("Paso 6");
        cy.get('button[data-test-button="save"]').click();
        screen("Paso 7");
        cy.get('a[href="#/tags/"].ember-view').first().click();
        cy.wait(2000)
        screen("Paso 8");
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })

    it('Crear un nuevo tag desde el panel de Tags sin datos en los campos', function() {
        let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags sin datos en los campos");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/tags/"].ember-view').click();
        screen("Paso 2");
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        screen("Paso 3");
        cy.get('button[data-test-button="save"]').click();
        screen("Paso 4");
        cy.get('p[class="response"]').should('include.text', 'You must specify a name for the tag.');
    })
    it('Crear un nuevo tag desde el panel de Tags sin campo slug', function() {
        let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags sin campo slug");
        signIn();
        cy.wait(1000);
        screen("Paso 1");
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.wait(1000);
        screen("Paso 2");
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.wait(1000);
        screen("Paso 3");
        cy.get('#tag-name').type("Tag 1 - Test");
        cy.wait(1000);
        screen("Paso 4");
        cy.get('#tag-description').type("This is an example of description");
        cy.wait(1000);
        screen("Paso 5");
        cy.get('button[data-test-button="save"]').click();
        cy.wait(1000);
        screen("Paso 6");
        cy.get('a[href="#/tags/"].ember-view').first().click();
        cy.wait(2000);
        screen("Paso 7");
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })
})