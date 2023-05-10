import { faker } from '@faker-js/faker';

const { signIn } = require('../../support/utils');

describe('Create members', () => {
    it('Test create member', () => {
        signIn();
        cy.get('a[href="#/members/"]').click();
        cy.wait(1000);
        cy.get('a[href="#/members/new/"]').its('length').then((length) => {
            if (length === 1) {
                cy.get('a[href="#/members/new/"]').click()
            } else {
                cy.get('a[href="#/members/new/"]').first().click()
            }
        });	
        cy.wait(1000);
        cy.get('#member-name').type('Cypress member name');
        cy.wait(1000);
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('#member-note').type('Cypress member note');
        cy.wait(1000);
        cy.get('button[data-test-button="save"]').click();
        cy.wait(2000);
        cy.get('a[data-test-link="members-back"]').click();
        cy.wait(1000);
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("Cypress member name")').should('have.length.at.least', 1);
    })

    it('Test create member just using email', () => {
        signIn();
        cy.get('a[href="#/members/"]').click();
        cy.wait(1000);
        cy.get('a[href="#/members/new/"]').click();	
        cy.wait(1000);
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('button[data-test-button="save"]').click();
        cy.wait(2000);
        cy.get('a[data-test-link="members-back"]').click();
        cy.wait(1000);
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("")').should('have.length.at.least', 1);
    })
    
    it('Test create member without note field', () => {
        signIn();
        cy.get('a[href="#/members/"]').click();
        cy.wait(1000);
        cy.get('a[href="#/members/new/"]').click();	
        cy.wait(1000);
        cy.get('#member-name').type('Cypress member name');
        cy.wait(1000);
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        cy.get('button[data-test-button="save"]').click();
        cy.wait(2000);
        cy.get('a[data-test-link="members-back"]').click();
        cy.wait(1000);
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("Cypress member name")').should('have.length.at.least', 1);
    });
})