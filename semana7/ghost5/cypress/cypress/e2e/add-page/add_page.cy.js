const { signIn, screenshot } = require('../../support/utils');
const {Page} = require('../../pageObjects/page');

const page = new Page();
describe('Add Page', function() {
    it('Registrar y publicar una nueva pagina', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina");
        signIn();
        page.clickPageLink();
        page.clickNavigateToPageEditor();
        page.title("Page 1");
        page.type("This is a testing page description");
        page.publishAndBackToEditor();
        page.gotoPagesList();
        page.checkTitleInList("Page 1");
    })

    it.only('Registrar y publicar una nueva pagina con imagen', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina con imagen");
        signIn();
        page.clickPageLink();
        page.clickNavigateToPageEditor();
        page.title("Page 1");
        page.type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png");
        page.publishAndBackToEditor();
        page.gotoPagesList();
        page.checkTitleInList("Page 1");
        
    })

    it('Registrar Pagina sin Titulo', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar Pagina sin Titulo");
        signIn();
        page.clickPageLink();
        page.clickNavigateToPageEditor();

        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.get('a[data-test-link="pages"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Untitle")').should('have.length.at.least', 1);
    })

    it('Registrar Pagina sin Foto', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar Pagina sin Foto");
        signIn();
        page.clickPageLink();
        page.clickNavigateToPageEditor();
        page.title("Cypress page title");
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your page..."]').type('Cypress page description');
        cy.wait(1000);
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.wait(1000);
        cy.get('button[data-test-button="continue"]').click();
        cy.wait(1000);
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000);
        cy.get('button[data-test-button="back-to-editor"').click();
        cy.wait(1000);
        cy.get('a[href="#/pages/"]').click();
        cy.wait(1000);
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Cypress page title")').should('have.length.at.least', 1);
    })

    it('Registrar y publicar una nueva pagina con video de youtube', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina con video de youtube");
        signIn();
        page.clickPageLink();
        page.clickNavigateToPageEditor();
        page.title("Page 1");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/youtube https://www.youtube.com/watch?v=pBy1zgt0XPc&ab_channel=GitHub{enter}");
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.get('button[data-test-button="continue"]').click();
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.get('button[data-test-button="back-to-editor"]').click();
        cy.get('a[data-test-link="pages"]').click();
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
    })
})