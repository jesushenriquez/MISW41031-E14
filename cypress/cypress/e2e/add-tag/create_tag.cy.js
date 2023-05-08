const { signIn } = require('../../support/utils');

describe('Create Tags', function() {
    it('Crear un nuevo tag desde el panel de Tags', function() {
        signIn();
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.get('#tag-name').type("Tag 1 - Test");
        cy.get('#tag-slug').type("-");
        cy.get('#tag-description').type("This is an example of description");
        cy.get('button[data-test-button="save"]').click();
        cy.visit('http://localhost:2368/ghost/#/tags');
        cy.wait(5000)
        cy.get('h3.gh-tag-list-name').filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })

    it('Crear un nuevo tag desde el panel de Tags sin datos en los campos', function() {
        signIn();
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.get('button[data-test-button="save"]').click();
        cy.get('p[class="response"]').should('include.text', 'You must specify a name for the tag.');
    })
})