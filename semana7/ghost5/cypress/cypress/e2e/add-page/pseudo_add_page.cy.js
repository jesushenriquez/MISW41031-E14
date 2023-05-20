const { signIn } = require('../../support/utils');
import { faker } from '@faker-js/faker';
const { Page } = require('../../pageObjects/page');

describe('Add Page', function() {

    const page = new Page();

    generarPagesAleatorias(3).forEach((data) => {
        it('Registrar y publicar una nueva pagina', function() {
            signIn();
            page.clickPageLink();
            page.clickNavigateToPageEditor();
            page.title(data.title);
            page.type(data.description);
            page.publishAndBackToEditor();
            page.gotoPagesList();
            page.checkTitleInList(data.title);
        })
    });

    generarPagesAleatorias(3).forEach((data) => {
        it.only('Registrar y publicar una nueva pagina con imagen', function() {
            signIn();
            page.clickPageLink();
            page.clickNavigateToPageEditor();
            page.title(data.title);
            page.addImage(data.image);
            page.publishAndBackToEditor();
            page.gotoPagesList();
            page.checkTitleInList(data.title);
        });
    })
})

describe('Edit Page', function() {
    it('Editar la información de una pagina existente', function() {
        signIn();
        for (let index = 0; index < 10; index++) {
            let pageTitle = faker.lorem.lines(1);
            cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[data-test-nav="pages"]').click();
                } else {
                    cy.get('a[data-test-nav="pages"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').first().click();
            cy.wait(1000);
            
            cy.get('textarea[placeholder="Page title"]').clear();
            cy.wait(1000);

            cy.get('textarea[placeholder="Page title"]').type(pageTitle);
            cy.wait(1000);

            cy.get('div[data-placeholder="Begin writing your page..."]').clear()
            cy.wait(1000);

            cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.lines(3))
            cy.wait(1000);

            cy.get('button[data-test-button="publish-save"]').click();
            cy.wait(8000);

            cy.get('a[href="#/pages/"]').click();
            cy.wait(2000);

            cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(`:contains(${pageTitle})`).should('have.length.at.least', 1);
        }
        
    })

    it('Editar la información de una pagina existente sin titulo', function() {
        signIn();
        for (let index = 22; index < 32; index++) {
            cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[data-test-nav="pages"]').click();
                } else {
                    cy.get('a[data-test-nav="pages"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').first().click();
            cy.wait(1000);
            
            cy.get('textarea[placeholder="Page title"]').clear();
            cy.wait(1000);

            cy.get('div[data-placeholder="Begin writing your page..."]').clear()
            cy.wait(1000);

            cy.get('div[data-placeholder="Begin writing your page..."]').type(faker.lorem.lines(3))
            cy.wait(1000);

            cy.get('button[data-test-button="publish-save"]').click();
            cy.wait(8000);

            cy.get('a[href="#/pages/"]').click();
            cy.wait(2000);

            cy.get('h3.gh-content-entry-title', { timeout: 10000 }).filter(':contains("(Untitled)")').should('have.length.at.least', 1);
        }
    })
})


function generarPageAleatoria() {
    return {
        title: faker.lorem.words(5),
        description: faker.lorem.paragraphs(5),
        image: faker.image.imageUrl(),
        youtube: faker.internet.url()
    };
}

function generarPagesAleatorias(cantidad) {
    let pages = [];
    for (let i = 0; i < cantidad; i++) {
      pages.push(generarPageAleatoria());
    }
    return pages;
  }
