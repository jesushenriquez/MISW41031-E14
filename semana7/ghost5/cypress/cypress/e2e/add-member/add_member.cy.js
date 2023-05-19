import { faker } from '@faker-js/faker';

const { signIn, screenshot, readUsersData } = require('../../support/utils');

describe('Create members', () => {
    
    it('Test create member', () => {
        let screen =screenshot.bind(null, "Add Members", "Crear un nuevo miembro desde el panel de members");
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 0; index < 10; index++) {
                screen("Paso 1");
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/members/"]').click()
                    } else {
                        cy.get('a[href="#/members/"]').first().click()
                    }
                });
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
                cy.get('#member-name').type(users[index].Displayname);
                cy.wait(1000);
                screen("Paso 4");
                cy.get('#member-email').type(users[index].Username);
                cy.wait(1000);
                screen("Paso 5");
                cy.get('#member-note').type(users[index].Department);
                cy.wait(1000);
                screen("Paso 6");
                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);
                screen("Paso 7");
                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);
                screen("Paso 8");
                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${users[index].Displayname})`).should('have.length.at.least', 1);
                screen("Paso 9");
            }
        })
    })
    
    it('Test create member without name', () => {
        let screen =screenshot.bind(null, "Add Members", "Crear un nuevo miembro desde el panel de members sin el campo name");
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 11; index < 21; index++) {
                screen("Paso 1");
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/members/"]').click()
                    } else {
                        cy.get('a[href="#/members/"]').first().click()
                    }
                });
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
                cy.get('#member-email').type(users[index].Username);
                cy.wait(1000);
                screen("Paso 4");
                cy.get('#member-note').type(users[index].Department);
                cy.wait(1000);
                screen("Paso 5");
                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);
                screen("Paso 6");
                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);
                screen("Paso 7");
                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains("")`).should('have.length.at.least', 1);
                screen("Paso 8");
            }
        })
    })

    it('Test create member without note', () => {
        let screen =screenshot.bind(null, "Add Members", "Crear un nuevo miembro desde el panel de members sin usar el campo note");
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 22; index < 32; index++) {
                screen("Paso 1");
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/members/"]').click()
                    } else {
                        cy.get('a[href="#/members/"]').first().click()
                    }
                });
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
                cy.get('#member-name').type(users[index].Displayname);
                cy.wait(1000);
                screen("Paso 4");
                cy.get('#member-email').type(users[index].Username);
                cy.wait(1000);
                screen("Paso 5");
                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);
                screen("Paso 6");
                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);
                screen("Paso 7");
                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${users[index].Displayname})`).should('have.length.at.least', 1);
                screen("Paso 8");
            }
        })
    })

    it('Test edit name field of a existing member', () => {
        let screen = screenshot.bind(null, "Add Members", "Editar el campo nombre de un miembro existente");
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 0; index < 10; index++) {
                screen("Paso 1");
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/members/"]').click()
                    } else {
                        cy.get('a[href="#/members/"]').first().click()
                    }
                });
                cy.wait(1000);
                screen("Paso 2");

                cy.get('a[data-test-table-data="details"]').first().click();
                cy.wait(1000);
                screen("Paso 3");

                cy.get('#member-name').clear();
                cy.wait(1000);
                screen("Paso 4");

                cy.get('#member-name').type(users[index].Displayname);
                cy.wait(1000);
                screen("Paso 5");

                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);
                screen("Paso 6");

                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);
                screen("Paso 7");

                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${users[index].Displayname})`).should('have.length.at.least', 1);
                screen("Paso 8");
            }
        })
        
    })
    
    it('Test edit an existing member with a invalid email', () => {
        let screen = screenshot.bind(null, "Add Members", "Editar miembro existente con un email invalido");
        signIn();
        cy.fixture('wrongEmail.json').then((wrongEmail)=>{
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
                screen("Paso 3");
    
                cy.get('a[data-test-table-data="details"]').first().click();
                cy.wait(1000);
                screen("Paso 4");
    
                cy.get('#member-email').clear();
                cy.wait(1000);
                screen("Paso 5");
    
                cy.get('#member-email').type(wrongEmail.value);
                cy.wait(1000);
                screen("Paso 6");
    
                cy.get('button[data-test-button="save"]').click();
                cy.wait(1000);
                screen("Paso 7");
                
                cy.get('p.response', { timeout: 10000 }).should('exist');
                screen("Paso 8");
            }
        })
    });
    

    it.only('Test edit an existing member with empty fields', () => {
        let screen = screenshot.bind(null, "Add Members", "Editar miembro existente campos invalidos");
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
            screen("Paso 3");

            cy.get('a[data-test-table-data="details"]').first().click();
            cy.wait(1000);
            screen("Paso 4");

            cy.get('#member-email').clear();
            cy.wait(1000);
            screen("Paso 5");

            cy.get('#member-name').clear();
            cy.wait(1000);
            screen("Paso 6");

            cy.get('#member-note').clear();
            cy.wait(1000);
            screen("Paso 7");

            cy.get('#member-note').clear();
            cy.wait(1000);
            screen("Paso 8");

            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000);
            screen("Paso 9");
            
            cy.get('p.response', { timeout: 10000 }).should('exist');
            screen("Paso 10");
        }
    });
})