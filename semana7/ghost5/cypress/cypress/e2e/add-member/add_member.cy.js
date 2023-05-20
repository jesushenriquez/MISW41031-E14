const { signIn, readUsersData } = require('../../support/utils');
const {Member} = require("../../pageObjects/member")

describe('Create members', () => {
    
    const member = new Member();

    it.only('Test create member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 0; index < 3; index++) {
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);

                cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickNewMemberLink();
                    } else {
                        member.clickFirstNewMemberLink();
                    }
                });	
                cy.wait(1000);
                
                member.typeName(users[index].Displayname);
                cy.wait(1000);
                
                member.typeEmail(users[index].Username);
                cy.wait(1000);
                
                member.typeNote(users[index].Department);
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.returnMembersList();
                cy.wait(1000);
                
                member.checkNameInList(users[index].Displayname);
            }
        })
    })
    
    it('Test create member without name', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
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
                cy.get('#member-email').type(users[index].Username);
                cy.wait(1000);
                cy.get('#member-note').type(users[index].Department);
                cy.wait(1000);
                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);
                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);
                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains("")`).should('have.length.at.least', 1);
            }
        })
    })

    it('Test create member without note', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
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
                cy.get('#member-name').type(users[index].Displayname);
                cy.wait(1000);
                cy.get('#member-email').type(users[index].Username);
                cy.wait(1000);
                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);
                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);
                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${users[index].Displayname})`).should('have.length.at.least', 1);
            }
        })
    })

    it('Test edit name field of a existing member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
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

                cy.get('#member-name').type(users[index].Displayname);
                cy.wait(1000);

                cy.get('button[data-test-button="save"]').click();
                cy.wait(2000);

                cy.get('a[data-test-link="members-back"]').click();
                cy.wait(1000);

                cy.get('h3.gh-members-list-name ', { timeout: 10000 }).filter(`:contains(${users[index].Displayname})`).should('have.length.at.least', 1);
            }
        })
        
    })
    
    it('Test edit an existing member with a invalid email', () => {
        signIn();
        cy.fixture('wrongEmail.json').then((wrongEmail)=>{
            for (let index = 0; index < 10; index++) {
                cy.reload()

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
    
                cy.get('#member-email').type(wrongEmail.value);
                cy.wait(1000);
    
                cy.get('button[data-test-button="save"]').click();
                cy.wait(1000);
                
                cy.get('p.response', { timeout: 10000 }).should('exist');
            }
        })
    });
    

    it('Test edit an existing member with empty fields', () => {
        signIn();
        for (let index = 0; index < 10; index++) {
            cy.reload()

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