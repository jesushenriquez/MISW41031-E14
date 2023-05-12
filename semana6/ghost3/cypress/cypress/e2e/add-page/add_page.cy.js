const { signIn } = require('../../support/utils');

describe('Add Page', function() {
    it('Registrar y publicar una nueva pagina', function() {
        signIn();
        cy.get('a[href="#/pages/"]').click();
        cy.get('a[href="#/editor/page/"]').first().click();
        cy.get('textarea[placeholder="Page Title"]').type("Page 1");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("This is a testing page description");
        cy.get('div.gh-publishmenu.ember-view').click();
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.get('a[href="#/pages/"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
    })

    it('Registrar y publicar una nueva pagina con imagen', function() {
        signIn();
        cy.get('a[href="#/pages/"]').click();
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('textarea[placeholder="Page Title"]').type("Page 1");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        cy.get('div.gh-publishmenu.ember-view').click();
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.get('a[href="#/pages/"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
    })

})