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
        cy.get('a[href="#/tags/"].ember-view').first().click();
        cy.wait(2000)
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
    })

    it('Crear un nuevo tag desde el panel de Tags sin datos en los campos', function() {
        signIn();
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.get('button[data-test-button="save"]').click();
        cy.get('p[class="response"]').should('include.text', 'You must specify a name for the tag.');
    })

    it('Crear un nuevo tag con detalles específicos	', function() {
        signIn();
        cy.get('a[href="#/tags/"].ember-view').click();
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
        cy.get('#tag-name').type("Tag 2 - Test");
        cy.get('#tag-slug').type("-");
        cy.get('#tag-description').type("This is an example of description");
        cy.get('#tag-parent').click();
        cy.get('li[class="ember-power-select-option"]').first().click();
        cy.get('button[data-test-button="save"]').click();
        cy.get('a[href="#/tags/"].ember-view').first().click();
        cy.wait(2000)
        cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 2")').should('have.length.at.least', 1);
    });
})