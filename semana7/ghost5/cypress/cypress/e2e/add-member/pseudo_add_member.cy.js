import { faker } from '@faker-js/faker';

const { signIn } = require('../../support/utils');

describe('Create members', () => {    
    it('Test create member', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 0; index < 10; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/"]').click()
                } else {
                    cy.get('a[href="#/members/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/new/"]').click()
                } else {
                    cy.get('a[href="#/members/new/"]').first().click()
                }
            });	
            cy.wait(1000);
            
            cy.get('#member-name').type(memberName);
            cy.wait(1000);
            
            cy.get('#member-email').type(faker.internet.email());
            cy.wait(1000);
            
            cy.get('#member-note').type(faker.lorem.lines(2));
            cy.wait(1000);
            
            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000);
            
            cy.get('a[data-test-link="members-back"]').click();
            cy.wait(1000);
            
            cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${memberName})`).should('have.length.at.least', 1);
        }
    })
    
    it('Test create member without name', () => {
        signIn();
        for (let index = 11; index < 21; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/"]').click()
                } else {
                    cy.get('a[href="#/members/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/new/"]').click()
                } else {
                    cy.get('a[href="#/members/new/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('#member-email').type(faker.internet.email());
            cy.wait(1000);
            
            cy.get('#member-note').type(faker.lorem.lines(2));
            cy.wait(1000);
            
            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000);
            
            cy.get('a[data-test-link="members-back"]').click();
            cy.wait(1000);
            
            cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains("")`).should('have.length.at.least', 1);
        }
    })

    it('Test create member without note', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 22; index < 32; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/"]').click()
                } else {
                    cy.get('a[href="#/members/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/new/"]').click()
                } else {
                    cy.get('a[href="#/members/new/"]').first().click()
                }
            });	
            cy.wait(1000);

            cy.get('#member-name').type(memberName);
            cy.wait(1000);

            cy.get('#member-email').type(faker.internet.email());
            cy.wait(1000);

            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000);

            cy.get('a[data-test-link="members-back"]').click();
            cy.wait(1000);

            cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${memberName})`).should('have.length.at.least', 1);
        }
    })

    it('Test edit name field of a existing member', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 0; index < 10; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/"]').click()
                } else {
                    cy.get('a[href="#/members/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[data-test-table-data="details"]').first().click();
            cy.wait(1000);

            cy.get('#member-name').clear();
            cy.wait(1000);

            cy.get('#member-name').type(memberName);
            cy.wait(1000);

            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000);

            cy.get('a[data-test-link="members-back"]').click();
            cy.wait(1000);

            cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${memberName})`).should('have.length.at.least', 1);
        }
    })
    
    it('Test edit an existing member with a invalid email', () => {
        signIn();
        for (let index = 0; index < 10; index++) {
            screen("Paso 1");
            
            cy.reload()
            screen("Paso 2")

            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/"]').click()
                } else {
                    cy.get('a[href="#/members/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[data-test-table-data="details"]').first().click();
            cy.wait(1000);

            cy.get('#member-email').clear();
            cy.wait(1000);

            cy.get('#member-email').type(faker.lorem.lines(1));
            cy.wait(1000);

            cy.get('button[data-test-button="save"]').click();
            cy.wait(1000);
            
            cy.get('p.response', { timeout: 10000 }).should('exist');
        }
    });
    

    it.only('Test edit an existing member with empty fields', () => {
        signIn();
        for (let index = 0; index < 10; index++) {
            cy.wait(1000);

            cy.reload()
            cy.wait(1000);

            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    cy.get('a[href="#/members/"]').click()
                } else {
                    cy.get('a[href="#/members/"]').first().click()
                }
            });
            cy.wait(1000);

            cy.get('a[class="ember-view gh-list-data"').last().click();
            cy.wait(1000);

            cy.get('#member-email').clear();
            cy.wait(1000);

            cy.get('#member-name').clear();
            cy.wait(1000);

            cy.get('#member-note').clear();
            cy.wait(1000);

            cy.get('#member-note').clear();
            cy.wait(1000);

            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000);
            
            cy.get('p.response', { timeout: 10000 }).should('exist');
        }
    });
})