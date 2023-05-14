const { signIn, screenshot } = require('../../support/utils');

describe('Create Tags', function() {
    it('Crear un nuevo tag desde el panel de Tags', function() {
        let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/tags/"].ember-view').click();
        screen("Paso 2");
        cy.get('a[href="#/tags/new/"]').click();
        screen("Paso 3");
        cy.get('#tag-name').type("Tag 1 - Test");
        screen("Paso 4");
        cy.get('#tag-slug').type("-");
        screen("Paso 5");
        cy.get('#tag-description').type("This is an example of description");
        screen("Paso 6");
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
        screen("Paso 7");
        cy.get('a[href="#/tags/"].ember-view').first().click();
        screen("Paso 8");
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
        screen("Paso 9");
    })

    it('Crear un nuevo tag desde el panel de Tags sin campo slug', function() {
        let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags sin campo slug");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/tags/"].ember-view').click();
        screen("Paso 2");
        cy.get('a[href="#/tags/new/"]').click();
        screen("Paso 3");
        cy.get('#tag-name').type("Tag 1 - Test");
        screen("Paso 4");
        cy.get('#tag-description').type("This is an example of description");
        screen("Paso 5");
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
        screen("Paso 6");
        cy.get('a[href="#/tags/"].ember-view').first().click();
        screen("Paso 7");
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
        screen("Paso 8");
    })
})