import { faker } from '@faker-js/faker';

const { signIn, screenshot } = require('../../support/utils');

describe('Create members', () => {
    it('Test create member', () => {
        let screen =screenshot.bind(null, "Add Members", "Crear un nuevo miembro desde el panel de members");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/members/"]').click();
        cy.wait(1000);
        screen("Paso 2");
        cy.get('a[href="#/members/new/"]').its('length').then((length) => {
            if (length === 1) {
                cy.get('a[href="#/members/new/"]').click()
            } else {
                cy.get('a[href="#/members/new/"]').first().click()
            }
        });	
        cy.wait(1000);
        screen("Paso 3");
        cy.get('#member-name').type('Cypress member name');
        cy.wait(1000);
        screen("Paso 4");
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        screen("Paso 5");
        cy.get('#member-note').type('Cypress member note');
        cy.wait(1000);
        screen("Paso 6");
        cy.get('button[data-test-button="save"]').click();
        cy.wait(2000);
        screen("Paso 7");
        cy.get('a[data-test-link="members-back"]').click();
        cy.wait(1000);
        screen("Paso 8");
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("Cypress member name")').should('have.length.at.least', 1);
        screen("Paso 9");
    })

    it('Test create member just using email', () => {
        let screen = screenshot.bind(null, "Add Members", "Crear un nuevo miembro desde el panel de members solo usando el campo email");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/members/"]').click();
        cy.wait(1000);
        screen("Paso 2");
        cy.get('a[href="#/members/new/"]').click();	
        cy.wait(1000);
        screen("Paso 3");
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        screen("Paso 4");
        cy.get('button[data-test-button="save"]').click();
        cy.wait(2000);
        screen("Paso 5");
        cy.get('a[data-test-link="members-back"]').click();
        cy.wait(1000);
        screen("Paso 6");
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("")').should('have.length.at.least', 1);
        screen("Paso 7");
    })
    
    it('Test create member without note field', () => {
        let screen = screenshot.bind(null, "Add Members", "Crear un nuevo miembro desde el panel de members sin usar el campo nota");
        signIn();
        screen("Paso 1");
        cy.get('a[href="#/members/"]').click();
        cy.wait(1000);
        screen("Paso 2");
        cy.get('a[href="#/members/new/"]').click();	
        cy.wait(1000);
        screen("Paso 3");
        cy.get('#member-name').type('Cypress member name');
        cy.wait(1000);
        screen("Paso 4");
        cy.get('#member-email').type(faker.internet.email());
        cy.wait(1000);
        screen("Paso 5");
        cy.get('button[data-test-button="save"]').click();
        cy.wait(2000);
        screen("Paso 6");
        cy.get('a[data-test-link="members-back"]').click();
        cy.wait(1000);
        screen("Paso 7");
        cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(':contains("Cypress member name")').should('have.length.at.least', 1);
        screen("Paso 8");
    });
})