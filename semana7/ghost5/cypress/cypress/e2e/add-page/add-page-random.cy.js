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
        it('Registrar y publicar una nueva pagina con imagen', function() {
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
    const page = new Page();

    it('Editar la información de una pagina existente', function() {
        signIn();
        for (let index = 0; index < 3; index++) {
            let pageTitle = faker.lorem.lines(1);
            cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                if (length === 1) {
                    page.clickPageLink();
                } else {
                    page.clickFirstPageLink();
                }
            });
            cy.wait(1000);

            page.clickFirstPagesListElement();
            cy.wait(1000);
            
            page.clearTitle();
            cy.wait(1000);

            page.title(pageTitle);
            cy.wait(1000);

            page.clearDescription();
            cy.wait(1000);

            page.typeDescription(faker.lorem.lines(3));
            cy.wait(1000);

            page.publishUpdate();
            cy.wait(8000);

            page.clickNavigationPage();
            cy.wait(2000);

            page.checkTitleInList(pageTitle);
        }
        
    })

    it('Editar la información de una pagina existente sin titulo', function() {
        signIn();
        for (let index = 22; index < 25; index++) {
            cy.get('a[data-test-nav="pages"]').its('length').then((length) => {
                if (length === 1) {
                    page.clickPageLink();
                } else {
                    page.clickFirstPageLink();
                }
            });
            cy.wait(1000);

            page.clickFirstPagesListElement();
            cy.wait(1000);
            
            page.clearTitle();
            cy.wait(1000);

            page.clearDescription();
            cy.wait(1000);

            page.typeDescription(faker.lorem.lines(3));
            cy.wait(1000);

            page.publishUpdate();
            cy.wait(8000);

            page.clickNavigationPage();
            cy.wait(2000);

            page.checkEmptyTitleInList();
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
