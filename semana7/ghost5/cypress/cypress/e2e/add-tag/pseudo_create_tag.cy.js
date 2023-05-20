const { signIn } = require('../../support/utils');
import { faker } from '@faker-js/faker';

describe('Add Tags', function() {
    it('Editar información de un tag existente', function() {
        signIn();
        for (let index = 0; index < 10; index++) {
            let tagName = faker.string.alpha(10);
            cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/tags/"]').click();
                } else {
                    cy.get('href="#/tags/"]').first().click()
                }
            });
            cy.wait(1000);
            
            cy.get('a[title="Edit tag"').last().click();
            cy.wait(1000);
            
            cy.get('#tag-name').clear();
            cy.wait(1000);

            cy.get('#tag-name').type(tagName);
            cy.wait(1000);

            cy.get('#tag-slug').clear();
            cy.wait(1000);

            cy.get('#tag-slug').type(faker.string.alpha(10));
            cy.wait(1000);

            cy.get('#tag-description').clear();
            cy.wait(1000);

            cy.get('#tag-description').type(faker.lorem.lines(3));
            cy.wait(1000);

            cy.get('button[data-test-button="save"]').click();
            cy.wait(1000);

            cy.get('a[href="#/tags/"].ember-view').first().click();
            cy.wait(1000);

            cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(`:contains(${tagName})`).should('have.length.at.least', 1);
        }
    })

    it('Editar información de un tag existente dejando campos vacios', function() {
        signIn();
        for (let index = 11; index < 21; index++) {
            let tagName = faker.string.alpha(10);

            cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/tags/"]').click();
                } else {
                    cy.get('href="#/tags/"]').first().click()
                }
            });
            cy.wait(1000);
            
            cy.get('a[title="Edit tag"').last().click();
            cy.wait(1000);
            
            cy.get('#tag-name').clear();
            cy.wait(1000);

            cy.get('#tag-name').type(tagName);
            cy.wait(1000);

            cy.get('#tag-slug').clear();
            cy.wait(1000);

            cy.get('#tag-description').clear();
            cy.wait(1000);

            cy.get('button[data-test-button="save"]').click();
            cy.wait(1000);

            cy.get('a[href="#/tags/"].ember-view').first().click();
            cy.wait(1000);

            cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(`:contains(${tagName})`).should('have.length.at.least', 1);
        }
    })
    
    
})