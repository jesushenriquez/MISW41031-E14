const { signIn, screenshot } = require('../../support/utils');

describe('Add Page', function() {
    it('Registrar y publicar una nueva pagina', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina");
        signIn();
        screen("Paso 1");
        cy.get('a[data-test-nav="pages"]').click();
        screen("Paso 2");
        cy.get('a[href="#/editor/page/"]').click();
        screen("Paso 3");
        cy.get('textarea[placeholder="Page title"]').type("Page 1");
        screen("Paso 4");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("This is a testing page description");
        screen("Paso 5");
        cy.get('button[data-test-button="publish-flow"]').click();
        screen("Paso 6");
        cy.get('button[data-test-button="continue"]').click();
        screen("Paso 7");
        cy.get('button[data-test-button="confirm-publish"]').click();
        screen("Paso 8");
        cy.get('button[data-test-button="back-to-editor"]').click();
        screen("Paso 9");
        cy.get('a[data-test-link="pages"]').click();
        screen("Paso 10");
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
        screen("Paso 10");
    })

    it('Registrar y publicar una nueva pagina con imagen', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina con imagen");
        signIn();
        screen("Paso 1");
        cy.get('a[data-test-nav="pages"]').click();
        screen("Paso 2");
        cy.get('a[href="#/editor/page/"]').click();
        screen("Paso 3");
        cy.get('textarea[placeholder="Page title"]').type("Page 1");
        screen("Paso 4");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        screen("Paso 5");
        cy.get('button[data-test-button="publish-flow"]').click();
        screen("Paso 6");
        cy.get('button[data-test-button="continue"]').click();
        screen("Paso 7");
        cy.get('button[data-test-button="confirm-publish"]').click();
        screen("Paso 8");
        cy.get('button[data-test-button="back-to-editor"]').click();
        screen("Paso 9");
        cy.get('a[data-test-link="pages"]').click();
        screen("Paso 10");
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
        screen("Paso 10");
    })

    it('Registrar Pagina sin Titulo', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar Pagina sin Titulo");
        signIn();
        screen("Paso 1");
        cy.get('a[data-test-nav="pages"]').click();
        screen("Paso 2");
        cy.get('a[href="#/editor/page/"]').click();
        screen("Paso 3");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        screen("Paso 4");
        cy.get('button[data-test-button="publish-flow"]').click();
        screen("Paso 5");
        cy.get('button[data-test-button="continue"]').click();
        screen("Paso 6");
        cy.get('button[data-test-button="confirm-publish"]').click();
        screen("Paso 7");
        cy.get('button[data-test-button="back-to-editor"]').click();
        screen("Paso 8");
        cy.get('a[data-test-link="pages"]').click();
        screen("Paso 9");
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Untitle")').should('have.length.at.least', 1);
        screen("Paso 10");
    })

    it('Registrar Pagina sin Foto', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar Pagina sin Foto");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/pages/"]').click();
        cy.wait(1000);
        screen("Paso 2");
        cy.get('a[href="#/editor/page/"]').click();
        cy.wait(1000);
        screen("Paso 3");
        cy.get('textarea[placeholder="Page title"]').type('Cypress page title');
        cy.wait(1000);
        screen("Paso 4");
        cy.get('div[data-placeholder="Begin writing your page..."]').type('Cypress page description');
        cy.wait(1000);
        screen("Paso 5");
        cy.get('button[data-test-button="publish-flow"]').click();
        cy.wait(1000);
        screen("Paso 6");
        cy.get('button[data-test-button="continue"]').click();
        cy.wait(1000);
        screen("Paso 7");
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000);
        screen("Paso 8");
        cy.get('button[data-test-button="back-to-editor"').click();
        cy.wait(1000);
        screen("Paso 9");
        cy.get('a[href="#/pages/"]').click();
        cy.wait(1000);
        screen("Paso 10");
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Cypress page title")').should('have.length.at.least', 1);
        screen("Paso 10");
    })
})