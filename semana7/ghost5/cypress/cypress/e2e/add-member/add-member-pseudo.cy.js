const { signIn, readUsersData } = require('../../support/utils');
const {Member} = require("../../pageObjects/member");

describe('Create members', () => {
    
    const member = new Member();

    let names = ["Josh", "Max", "Jhonn", "Terry", "Wilson", "Mark"];
    let emails = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let descriptions = [
        "accept", 
        "afford", 
        "agree", 
        "alert", 
        "allow", 
        "welcome", 
        "wish", 
        "wobble", 
        "wonder", 
        "work", 
        "worry", 
        "wrap", 
        "wreck"
    ];

    it('Test create member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 0; index < 3; index++) {
                let memberName = `${users[index].Displayname}-${names[Math.floor(Math.random()*names.length)]}`;
                let memberEmail = `${emails[Math.floor(Math.random()*emails.length)]}-${users[index].Username}`;
                let memberNote = `${users[index].Department}-${descriptions[Math.floor(Math.random()*descriptions.length)]}`;

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
                cy.wait(2000);
                
                member.typeName(memberName);
                cy.wait(1000);
                
                member.typeEmail(memberEmail);
                cy.wait(1000);
                
                member.typeNote(memberNote);
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.returnMembersList();
                cy.wait(1000);
                
                member.checkNameInList(memberName);
            }
        })
    })
    
    it.only('Test create member without name', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{

            for (let index = 10; index < 13; index++) {
                let memberEmail = `${emails[Math.floor(Math.random()*emails.length)]}-${users[index].Username}`;
                let memberNote = `${users[index].Department}-${descriptions[Math.floor(Math.random()*descriptions.length)]}`;
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

                member.typeEmail(memberEmail);
                cy.wait(1000);
                
                member.typeNote(memberNote);
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.returnMembersList();
                cy.wait(1000);
                
                member.checkEmptyStringNameInList();
            }
        })
    })

    it('Test create member without note', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 20; index < 23; index++) {
                let memberName = `${users[index].Displayname}-${names[Math.floor(Math.random()*names.length)]}`;
                let memberEmail = `${emails[Math.floor(Math.random()*emails.length)]}-${users[index].Username}`;

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

                member.typeName(memberName);
                cy.wait(1000);

                member.typeEmail(memberEmail);
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.returnMembersList();
                cy.wait(1000);
                
                member.checkNameInList(memberName);
            }
        })
    })

    it('Test edit name field of a existing member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 40; index < 43; index++) {
                let memberName = `${users[index].Displayname}-${names[Math.floor(Math.random()*names.length)]}`;
                
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);

                member.clickFirstMembersListElement();
                cy.wait(1000);

                member.clearName();
                cy.wait(1000);

                member.typeName(memberName);
                cy.wait(1000);

                member.saveCreation();
                cy.wait(2000);

                member.returnMembersList();
                cy.wait(1000);

                member.checkNameInList(memberName);
            }
        })
        
    })
    
    it('Test edit an existing member with a invalid email', () => {
        signIn();
        cy.fixture('wrongEmail.json').then((wrongEmail)=>{
            for (let index = 0; index < 3; index++) {
                let wrongEmail = `${wrongEmail.value}-${names[Math.floor(Math.random()*names.length)]}`;
                
                cy.wait(2000);
                cy.reload()

                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
    
                member.clickFirstMembersListElement();
                cy.wait(1000);
    
                member.clearEmail();
                cy.wait(1000);
    
                member.typeEmail(wrongEmail);
                cy.wait(1000);
    
                member.saveCreation();
                cy.wait(1000);
                
                member.checkErrorMessageExist();
            }
        })
    });
    
    it('Test edit an existing member with empty fields', () => {
        signIn();
        for (let index = 0; index < 3; index++) {
            cy.wait(1000);
            cy.reload()

            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(1000);
            
            member.clickFirstMembersListElement();
            cy.wait(2000);
            
            member.clearEmail();
            cy.wait(1000);
            
            member.clearName();
            cy.wait(1000);
            
            member.clearNote();
            cy.wait(1000);
            
            member.saveCreation();
            cy.wait(2000);
            
            member.checkErrorMessageExist();
        }
    });
})