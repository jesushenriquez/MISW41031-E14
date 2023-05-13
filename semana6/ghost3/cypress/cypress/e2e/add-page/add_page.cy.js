const { signIn, screenshot } = require('../../support/utils');
const compareImages = require("resemblejs/compareImages");
const fs = require('fs');


describe('Add Page', function() {
    it('Registrar y publicar una nueva pagina', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/pages/"]').click();
        screen("Paso 2");
        cy.get('a[href="#/editor/page/"]').first().click();
        screen("Paso 3");
        cy.get('textarea[placeholder="Page Title"]').type("Page 1");
        screen("Paso 4");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("This is a testing page description");
        screen("Paso 5");
        cy.get('div.gh-publishmenu.ember-view').click();
        screen("Paso 6");
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        cy.get('a[href="#/pages/"]').click();
        screen("Paso 7");
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
        screen("Paso 8");
    })

    it('Registrar y publicar una nueva pagina con imagen', function() {
        let screen = screenshot.bind(null, "Add Page", "Registrar y publicar una nueva pagina con imagen");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/pages/"]').click();
        screen("Paso 2");
        cy.get('a[href="#/editor/page/"]').click();
        screen("Paso 3");
        cy.get('textarea[placeholder="Page Title"]').type("Page 1");
        screen("Paso 4");
        cy.get('div[data-placeholder="Begin writing your page..."]').type("/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}");
        screen("Paso 5");
        cy.get('div.gh-publishmenu.ember-view').click();
        screen("Paso 6");
        cy.get('button.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click();
        screen("Paso 7");
        cy.get('a[href="#/pages/"]').click();
        screen("Paso 8");
        cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("Page 1")').should('have.length.at.least', 1);
        screen("Paso 9");
    })

    async function compareScreenshot(imageName) {
        const data = await compareImages(
            fs.readFileSync(`../../screenshots/add-page/${imageName}.png`),
            fs.readFileSync(`/Users/jesus/Developer/uniandes/ciclo2/pruebas-automatizadas/semana6/MISW41031-E14/semana6/ghost5/cypress/cypress/screenshots/add-tag/${imageName}.png`),
            options
        );

        resultInfo['chromium'] = {
            isSameDimensions: data.isSameDimensions,
            dimensionDifference: data.dimensionDifference,
            rawMisMatchPercentage: data.rawMisMatchPercentage,
            misMatchPercentage: data.misMatchPercentage,
            diffBounds: data.diffBounds,
            analysisTime: data.analysisTime
        }
        fs.writeFileSync(`./results/${datetime}/compare.png`, data.getBuffer());
    }

})