const { signIn, readUsersData } = require('../../support/utils');
const {Member} = require("../../pageObjects/member");

describe('Create members', () => {
    
    const member = new Member();

    it('Test create member', () => {
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
            for (let index = 10; index < 13; index++) {
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

                member.typeEmail(users[index].Username);
                cy.wait(1000);
                
                member.typeNote(users[index].Department);
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
                
                member.saveCreation();
                cy.wait(2000);
                
                member.returnMembersList();
                cy.wait(1000);
                
                member.checkNameInList(users[index].Displayname);
            }
        })
    })

    it('Test edit name field of a existing member', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 40; index < 43; index++) {
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

                member.typeName(users[index].Displayname);
                cy.wait(1000);

                member.saveCreation();
                cy.wait(2000);

                member.returnMembersList();
                cy.wait(1000);

                member.checkNameInList(users[index].Displayname);
            }
        })
        
    })
    
    it('Test edit an existing member with a invalid email', () => {
        signIn();
        cy.fixture('wrongEmail.json').then((wrongEmail)=>{
            for (let index = 0; index < 3; index++) {
                cy.wait(2000);
                cy.reload()

                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(2000);
    
                member.clickFirstMembersListElement();
                cy.wait(1000);
    
                member.clearEmail();
                cy.wait(1000);
    
                member.typeEmail(wrongEmail.value);
                cy.wait(1000);
    
                member.saveCreation();
                cy.wait(1000);
                
                member.checkErrorMessageExist();
                cy.wait(1000);
            }
        })
    });
    

    it('Test edit an existing member with empty fields', () => {
        signIn();
        for (let index = 0; index < 3; index++) {
            cy.wait(1000);
            cy.reload();

            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);
            
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
            cy.wait(2000);
        }
    });

    it('Add member with more fields than allowed in note field', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 50; index < 53; index++) {
                cy.wait(1000);
                cy.reload();

                let memberNote = users[index].Department.repeat(30);
                
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
                cy.wait(3000);
                
                member.typeName(users[index].Displayname);
                cy.wait(1000);
                
                member.typeEmail(users[index].Username);
                cy.wait(1000);
                
                member.typeNote(memberNote);
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.checkErrorMessageExist();
                cy.wait(2000);

                member.clickFirstMemberLink();
                
                member.clickLeave();
            }
        })
        
    });

    it('Test edit an existing member with exceded note field', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 26; index < 29; index++) {
                cy.wait(1000);
                cy.reload();

                let memberNote = users[index].Department.repeat(30);
                
                cy.get('a[href="#/members/"]').its('length').then((length) => {
                    if (length === 1) {
                        member.clickMemberLink();
                    } else {
                        member.clickFirstMemberLink();
                    }
                });
                cy.wait(1000);

                member.clickFirstMembersListElement();
                cy.wait(3000);
                
                member.clearName();
                cy.wait(1000);

                member.typeName(users[index].Displayname);
                cy.wait(1000);

                member.clearEmail();
                cy.wait(1000);

                member.typeEmail(users[index].Username);
                cy.wait(1000);
                
                member.clearNote();

                member.typeNote(memberNote);
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.checkErrorMessageExist();
                cy.wait(2000);
            }
        })
    });

    it('Test create member without subscritpion', () => {
        signIn();
        cy.fixture('users.json').then((users)=>{
            for (let index = 14; index < 17; index++) {
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
                cy.wait(3000);
                
                member.typeName(users[index].Displayname);
                cy.wait(1000);
                
                member.typeEmail(users[index].Username);
                cy.wait(1000);
                
                member.typeNote(users[index].Department);
                cy.wait(1000);

                member.uncheckSubscribe();
                cy.wait(1000);
                
                member.saveCreation();
                cy.wait(2000);
                
                member.returnMembersList();
                cy.wait(1000);
                
                member.checkNameInList(users[index].Displayname);
            }
        })
    })


})