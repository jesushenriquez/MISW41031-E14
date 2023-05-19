const { signIn, screenshot } = require('../../support/utils');

describe('Edit Page', function() {
    it.only('Editar la información de una pagina existente', function() {
        let screen = screenshot.bind(null, "Add Page", "Edit existing page information");
        signIn();
        cy.fixture('pages.json').then((pages)=>{
            for (let index = 0; index < 10; index++) {
                screen("Paso 1");
                cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[data-test-nav="pages"]').click();
                    } else {
                        cy.get('a[data-test-nav="pages"]').first().click()
                    }
                });
                cy.wait(1000);
                screen("Paso 2");

                cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').first().click();
                cy.wait(1000);
                screen("Paso 3");
                
                cy.get('textarea[placeholder="Page title"]').clear();
                cy.wait(1000);
                screen("Paso 4");

                cy.get('textarea[placeholder="Page title"]').type(pages[index].name);
                cy.wait(1000);
                screen("Paso 5");

                cy.get('div[data-placeholder="Begin writing your page..."]').clear()
                cy.wait(1000);
                screen("Paso 6");

                cy.get('div[data-placeholder="Begin writing your page..."]').type(pages[index].description)
                cy.wait(1000);
                screen("Paso 7");

                cy.get('button[data-test-button="publish-save"]').click();
                cy.wait(8000);
                screen("Paso 8");

                cy.get('a[href="#/pages/"]').click();
                cy.wait(2000);
                screen("Paso 9");

                cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(`:contains(${pages[index].name})`).should('have.length.at.least', 1);
                screen("Paso 10");
            }
        })
    })
})