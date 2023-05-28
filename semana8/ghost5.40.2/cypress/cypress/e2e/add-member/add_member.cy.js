const { signIn, readUsersData, screenshot } = require('../../support/utils');
const {Member} = require("../../pageObjects/member");

describe('Create members', () => {
    const member = new Member();

    it('Test create member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 0; index < 3; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test create member ${index}`);
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso1");

                cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickNewMemberLink();
                    } else {
                        member.clickFirstNewMemberLink();
                    }
                });	
                cy.wait(1000);
                screen("paso2");

                member.typeName(users[index].Displayname);
                cy.wait(1000);
                screen("paso3");

                member.typeEmail(users[index].Username);
                cy.wait(1000);
                screen("paso4");

                member.typeNote(users[index].Department);
                cy.wait(1000);
                screen("paso5");

                member.saveCreation();
                cy.wait(2000);
                screen("paso6");

                member.returnMembersList();
                cy.wait(1000);
                screen("paso7");

                member.checkNameInList(users[index].Displayname);
                screen("paso8");
            }
        })
    })
    
    it('Test create member without name', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 10; index < 13; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test create member without name ${index}`);
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso1");

                cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickNewMemberLink();
                    } else {
                        member.clickFirstNewMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso2");

                member.typeEmail(users[index].Username);
                cy.wait(1000);
                screen("paso3");
                
                member.typeNote(users[index].Department);
                cy.wait(1000);
                screen("paso4");


                member.saveCreation();
                cy.wait(2000);
                screen("paso5");
                
                member.returnMembersList();
                cy.wait(1000);
                screen("paso6");

                member.checkEmptyStringNameInList();
                screen("paso7");
            }
        })
    })

    it('Test create member without note', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 20; index < 23; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test create member without note ${index}`);

                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso1");


                cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickNewMemberLink();
                    } else {
                        member.clickFirstNewMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso2");

                member.typeName(users[index].Displayname);
                cy.wait(1000);
                screen("paso3");

                member.typeEmail(users[index].Username);
                cy.wait(1000);
                screen("paso4");
                
                member.saveCreation();
                cy.wait(2000);
                screen("paso5");
                
                member.returnMembersList();
                cy.wait(1000);
                screen("paso6");
                
                member.checkNameInList(users[index].Displayname);
                screen("paso7");
            }
        })
    })

    it('Test edit name field of a existing member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 40; index < 43; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test edit name field of a existing member ${index}`);

                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso1");

                member.clickFirstMembersListElement();
                cy.wait(1000);
                screen("paso2");

                member.clearName();
                cy.wait(1000);
                screen("paso3");

                member.typeName(users[index].Displayname);
                cy.wait(1000);
                screen("paso4");

                member.saveCreation();
                cy.wait(2000);
                screen("paso5");

                member.returnMembersList();
                cy.wait(1000);
                screen("paso6");

                member.checkNameInList(users[index].Displayname);
                screen("paso7");
            }
        })
        
    })
    
    it('Test edit an existing member with a invalid email', () => {
        signIn();
        cy.fixture('wrongEmail.json').then((wrongEmail)=>{
            for (let index = 0; index < 3; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test edit an existing member with a invalid email ${index}`);
                
                cy.wait(2000);
                screen("paso1");
                
                cy.reload();
                screen("paso2");

                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(2000);
                screen("paso3");
    
                member.clickFirstMembersListElement();
                cy.wait(1000);
                screen("paso4");
    
                member.clearEmail();
                cy.wait(1000);
                screen("paso5");
    
                member.typeEmail(wrongEmail.value);
                cy.wait(1000);
                screen("paso6");
    
                member.saveCreation();
                cy.wait(1000);
                screen("paso7");
                
                member.checkErrorMessageExist();
                cy.wait(1000);
                screen("paso8");
            }
        })
    });
    

    it('Test edit an existing member with empty fields', () => {
        signIn();
        for (let index = 0; index < 3; index++) {
            let screen = screenshot.bind(null, "Add Members", `Test edit an existing member with empty fields ${index}`);
            
            cy.wait(1000);
            screen("paso1");

            cy.reload();
            screen("paso2");

            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);
            screen("paso3");

            member.clickFirstMembersListElement();
            cy.wait(2000);
            screen("paso3");

            member.clearEmail();
            cy.wait(1000);
            screen("paso4");

            member.clearName();
            cy.wait(1000);
            screen("paso5");

            member.clearNote();
            cy.wait(1000);
            screen("paso6");

            member.saveCreation();
            cy.wait(2000);
            screen("paso7");

            member.checkErrorMessageExist();
            cy.wait(2000);
            screen("paso8");
        }
    });

    it('Add member with more fields than allowed in note field', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 50; index < 53; index++) {
                let screen = screenshot.bind(null, "Add Members", `Add member with more fields than allowed in note field ${index}`);

                cy.wait(1000);
                screen("paso1");

                cy.reload();
                screen("paso2");

                let memberNote = users[index].Department.repeat(30);
                
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso3");

                cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickNewMemberLink();
                    } else {
                        member.clickFirstNewMemberLink();
                    }
                });	
                cy.wait(3000);
                screen("paso4");
                
                member.typeName(users[index].Displayname);
                cy.wait(1000);
                screen("paso5");
                
                member.typeEmail(users[index].Username);
                cy.wait(1000);
                screen("paso6");

                member.typeNote(memberNote);
                cy.wait(1000);
                screen("paso7");

                member.saveCreation();
                cy.wait(2000);
                screen("paso8");

                member.checkErrorMessageExist();
                cy.wait(2000);
                screen("paso9");

                member.clickFirstMemberLink();
                screen("paso10");

                member.clickLeave();
                screen("paso11");
            }
        })
        
    });

    it('Test edit an existing member with exceded note field', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 26; index < 29; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test edit an existing member with exceded note field ${index}`);
                
                cy.wait(1000);
                screen("paso1");

                cy.reload();
                screen("paso2");

                let memberNote = users[index].Department.repeat(30);
                
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso3");

                member.clickFirstMembersListElement();
                cy.wait(3000);
                screen("paso4");

                member.clearName();
                cy.wait(1000);
                screen("paso5");

                member.typeName(users[index].Displayname);
                cy.wait(1000);
                screen("paso6");

                member.clearEmail();
                cy.wait(1000);
                screen("paso7");

                member.typeEmail(users[index].Username);
                cy.wait(1000);
                screen("paso8");
                
                member.clearNote();
                screen("paso9");

                member.typeNote(memberNote);
                cy.wait(1000);
                screen("paso10");
                
                member.saveCreation();
                cy.wait(2000);
                screen("paso11");
                
                member.checkErrorMessageExist();
                cy.wait(2000);
                screen("paso12");
            }
        })
    });

    it('Test create member without subscritpion', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 14; index < 17; index++) {
                let screen = screenshot.bind(null, "Add Members", `Test create member without subscritpion ${index}`);
                
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);
                screen("paso1");

                cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickNewMemberLink();
                    } else {
                        member.clickFirstNewMemberLink();
                    }
                });	
                cy.wait(3000);
                screen("paso2");
                
                member.typeName(users[index].Displayname);
                cy.wait(1000);
                screen("paso3");
                
                member.typeEmail(users[index].Username);
                cy.wait(1000);
                screen("paso4");

                member.typeNote(users[index].Department);
                cy.wait(1000);
                screen("paso5");

                member.uncheckSubscribe();
                cy.wait(1000);
                screen("paso6");

                member.saveCreation();
                cy.wait(2000);
                screen("paso7");

                member.returnMembersList();
                cy.wait(1000);
                screen("paso8");

                member.checkNameInList(users[index].Displayname);
                screen("paso9");
            }
        })
    })


})