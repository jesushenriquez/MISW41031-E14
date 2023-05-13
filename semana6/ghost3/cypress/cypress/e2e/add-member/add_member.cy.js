import { faker } from '@faker-js/faker';

const { signIn, MembersActivation } = require('../../support/utils');

describe('Create members', () => {
    it('Test create member', () => {
        signIn();
        cy.wait(1000);
        cy.get('a[href="#/members/"').click();
        cy.wait(1000);
        cy.get('a[href="#/members/new/"').its('length').then((length) => {
            if (length === 1) {
                cy.get('a[href="#/members/new/"').click()
            } else {
                cy.get('a[href="#/members/new/"').first().click()
            }
        });	
        cy.wait(1000);
        cy.get('#member-name').type('Cypress member name');
        cy.wait(1000);
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('#member-note').type('Cypress member note');
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').contains('Save').click();
        cy.wait(1000);
        cy.get('a[href="#/members/"').first().click();
        cy.wait(1000);
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("Cypress member name")').should('have.length.at.least', 1);
    })

    it('Test create member without note field', () => {
        signIn();
        cy.wait(1000);
        cy.get('a[href="#/members/"').click();
        cy.wait(1000);
        cy.get('a[href="#/members/new/"').its('length').then((length) => {
            if (length === 1) {
                cy.get('a[href="#/members/new/"').click()
            } else {
                cy.get('a[href="#/members/new/"').first().click()
            }
        });	
        cy.wait(1000);
        cy.get('#member-name').type('Cypress member name');
        cy.wait(1000);
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').contains('Save').click();
        cy.wait(1000);
        cy.get('a[href="#/members/"').first().click();
        cy.wait(1000);
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("Cypress member name")').should('have.length.at.least', 1);
    });
})
