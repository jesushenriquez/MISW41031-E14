const { signIn, screenshot } = require('../../support/utils');
import { faker } from '@faker-js/faker';

describe('Add Tags', function() {
    it('Editar información de un tag existente', function() {
        let screen = screenshot.bind(null, "Add Tags", "Edit existing tag information");
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 0; index < 10; index++) {
                let tagName = faker.string.alpha(10);
                screen("Paso 1");
                cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/tags/"]').click();
                    } else {
                        cy.get('href="#/tags/"]').first().click()
                    }
                });
                cy.wait(1000);
                screen("Paso 2");

                cy.get('a[title="Edit tag"').last().click();
                cy.wait(1000);
                screen("Paso 3");
                
                cy.get('#tag-name').clear();
                cy.wait(1000);
                screen("Paso 4");

                cy.get('#tag-name').type(tagName);
                cy.wait(1000);
                screen("Paso 5");

                cy.get('#tag-slug').clear();
                cy.wait(1000);
                screen("Paso 6");

                cy.get('#tag-slug').type(faker.string.alpha(10));
                cy.wait(1000);
                screen("Paso 7");

                cy.get('#tag-description').clear();
                cy.wait(1000);
                screen("Paso 9");

                cy.get('#tag-description').type(faker.lorem.lines(3));
                cy.wait(1000);
                screen("Paso 9");

                cy.get('button[data-test-button="save"]').click();
                cy.wait(1000);
                screen("Paso 10");

                
                cy.get('a[href="#/tags/"].ember-view').first().click();
                cy.wait(1000);
                screen("Paso 11");

                cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(`:contains(${tagName})`).should('have.length.at.least', 1);
                screen("Paso 12");
            }
        })
    })

    it('Editar información de un tag existente dejando campos vacios', function() {
        let screen = screenshot.bind(null, "Add Tags", "Edit existing tag information leaving empty fields");
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 11; index < 21; index++) {
                let tagName = faker.string.alpha(10);
                screen("Paso 1");
                cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/tags/"]').click();
                    } else {
                        cy.get('href="#/tags/"]').first().click()
                    }
                });
                cy.wait(1000);
                screen("Paso 2");

                cy.get('a[title="Edit tag"').last().click();
                cy.wait(1000);
                screen("Paso 3");
                
                cy.get('#tag-name').clear();
                cy.wait(1000);
                screen("Paso 4");

                cy.get('#tag-name').type(tagName);
                cy.wait(1000);
                screen("Paso 5");

                cy.get('#tag-slug').clear();
                cy.wait(1000);
                screen("Paso 6");

                cy.get('#tag-description').clear();
                cy.wait(1000);
                screen("Paso 9");

                cy.get('button[data-test-button="save"]').click();
                cy.wait(1000);
                screen("Paso 10");

                
                cy.get('a[href="#/tags/"].ember-view').first().click();
                cy.wait(1000);
                screen("Paso 11");

                cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(`:contains(${tagName})`).should('have.length.at.least', 1);
                screen("Paso 12");
            }
        })
    })
    
    
})