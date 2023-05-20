import { faker } from '@faker-js/faker';

const { signIn } = require('../../support/utils');
const {Member} = require("../../pageObjects/member");

describe('Create members', () => {    
    const member = new Member();

    it('Test create member', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 0; index < 3; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);

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
            
            member.typeEmail(faker.internet.email());
            cy.wait(1000);
            
            member.typeNote(faker.lorem.lines(2));
            cy.wait(1000);
            
            member.saveCreation();
            cy.wait(2000);
            
            member.returnMembersList();
            cy.wait(1000);
            
            member.checkNameInList(memberName);
        }
    })
    
    it('Test create member without name', () => {
        signIn();
        for (let index = 11; index < 14; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);

            cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickNewMemberLink();
                } else {
                    member.clickFirstNewMemberLink();
                }
            });
            cy.wait(2000);

            member.typeEmail(faker.internet.email());
            cy.wait(1000);
            
            member.typeNote(faker.lorem.lines(2));
            cy.wait(1000);
            
            member.saveCreation();
            cy.wait(2000);
            
            member.returnMembersList();
            cy.wait(1000);
            
            member.checkEmptyStringNameInList();
        }
    })

    it('Test create member without note', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 22; index < 25; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);

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

            member.typeEmail(faker.internet.email());
            cy.wait(1000);

            member.saveCreation();
            cy.wait(2000);

            member.returnMembersList();
            cy.wait(1000);

            member.checkNameInList(memberName);
        }
    })

    it('Test edit name field of a existing member', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 0; index < 3; index++) {
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
    
    it('Test edit an existing member with a invalid email', () => {
        signIn();
        for (let index = 0; index < 3; index++) {
            cy.wait(2000);
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
            cy.wait(1000);

            member.clearEmail();
            cy.wait(1000);

            member.typeEmail(faker.lorem.lines(1));
            cy.wait(1000);

            member.saveCreation();
            cy.wait(1000);
            
            member.checkErrorMessageExist();
            cy.wait(2000);
        }
    });
    

    it('Test edit an existing member with empty fields', () => {
        signIn();
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
        for (let index = 50; index < 53; index++) {
            cy.wait(1000);
            cy.reload();

            let memberNote = faker.lorem.lines(15);
            
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);

            cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickNewMemberLink();
                } else {
                    member.clickFirstNewMemberLink();
                }
            });	
            cy.wait(3000);
            
            member.typeName(faker.person.fullName());
            cy.wait(1000);
            
            member.typeEmail(faker.internet.email());
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
        
    });

    it('Test edit an existing member with exceded note field', () => {
        signIn();
        for (let index = 26; index < 29; index++) {
            cy.wait(1000);
            cy.reload();

            let memberNote = faker.lorem.lines(15);
            
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(3000);

            member.clickFirstMembersListElement();
            cy.wait(3000);
            
            member.clearName();
            cy.wait(1000);
            
            member.typeName(faker.person.fullName());
            cy.wait(1000);

            member.clearEmail();
            cy.wait(1000);

            member.typeEmail(faker.internet.email());
            cy.wait(1000);
            
            member.clearNote();

            member.typeNote(memberNote);
            cy.wait(1000);
            
            member.saveCreation();
            cy.wait(2000);
            
            member.checkErrorMessageExist();
            cy.wait(2000);
        }
    });

    it('Test create member without subscribe', () => {
        signIn();
        let memberName = faker.person.fullName();
        for (let index = 0; index < 3; index++) {
            cy.get('a[href="#/members/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickMemberLink();
                } else {
                    member.clickFirstMemberLink();
                }
            });
            cy.wait(2000);

            cy.get('a[href="#/members/new/"]').its('length').then((length) => {
                if (length === 1) {
                    member.clickNewMemberLink();
                } else {
                    member.clickFirstNewMemberLink();
                }
            });	
            cy.wait(3000);
            
            member.typeName(memberName);
            cy.wait(1000);
            
            member.typeEmail(faker.internet.email());
            cy.wait(1000);
            
            member.typeNote(faker.lorem.lines(2));
            cy.wait(1000);
            
            member.uncheckSubscribe();
            cy.wait(1000);

            member.saveCreation();
            cy.wait(2000);
            
            member.returnMembersList();
            cy.wait(1000);
            
            member.checkNameInList(memberName);
        }
    })
})