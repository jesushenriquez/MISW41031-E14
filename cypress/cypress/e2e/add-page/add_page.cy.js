const { signIn } = require('../../support/utils');

describe('Add Page', function() {
    it('Registrar y publicar una nueva pagina', function() {
        signIn();
        cy.get('a[data-test-nav="pages"]').click();
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('textarea[placeholder="Page title"]').type("Page 1");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("This is a testing page description");
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.get('a[data-test-link="pages"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
    })

    it('Registrar y publicar una nueva pagina con imagen', function() {
        signIn();
        cy.get('a[data-test-nav="pages"]').click();
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('textarea[placeholder="Page title"]').type("Page 1");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.get('a[data-test-link="pages"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
    })

    it('Registrar Pagina sin Titulo', function() {
        signIn();
        cy.get('a[data-test-nav="pages"]').click();
        cy.get('a[href="#/editor/page/"]').click();
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.get('a[data-test-link="pages"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Untitle")').should('have.length.at.least', 1);
    })
})