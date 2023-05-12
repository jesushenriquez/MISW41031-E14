const { signIn } = require('../../support/utils');

describe('Create Tags', function() {
    it('Crear un nuevo tag desde el panel de Tags', function() {
        signIn();
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.get('a[href="#/tags/new/"]').click();
        cy.get('#tag-name').type("Tag 1 - Test");
        cy.get('#tag-slug').type("-");
        cy.get('#tag-description').type("This is an example of description");
        cy.get('button.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
        cy.get('a[href="#/tags/"].ember-view').first().click();
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })
})