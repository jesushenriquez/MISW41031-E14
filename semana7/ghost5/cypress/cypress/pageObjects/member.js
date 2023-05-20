class Member {
    
    clickMemberLink(){
        cy.get('a[href="#/members/"]').click();
    }

    clickFirstMemberLink(){
        cy.get('a[href="#/members/"]').first().click()
    }

    clickNewMemberLink(){
        cy.get('a[href="#/members/new/"]').click();
    }

    clickFirstNewMemberLink(){
        cy.get('a[href="#/members/new/"]').first().click();
    }

    clearName(){
        cy.get('#member-name').clear();
    }

    typeName(name) {
        cy.get('#member-name').type(name);
    }

    clearEmail(){
        cy.get('#member-email').clear();
    }

    typeEmail(email) {
        cy.get('#member-email').type(email);
    }

    clearNote(){
        cy.get('#member-note').clear();
    }

    typeNote(note) {
        cy.get('#member-note').type(note);
    }

    saveCreation(){
        cy.get('button[data-test-button="save"]').click();
    }

    returnMembersList(){
        cy.get('a[data-test-link="members-back"]').click();
    }

    clickFirstMembersListElement(){
        cy.get('a[data-test-table-data="details"]').first().click();
    }

    checkNameInList(name){
        cy.get('h3.gh-members-list-name ', { timeout: 10000 })
            .filter(`:contains(${name})`)
            .should('have.length.at.least', 1);
    }

    checkEmptyStringNameInList(name){
        cy.get('h3.gh-members-list-name ', { timeout: 10000 })
            .filter(':contains("")')
            .should('have.length.at.least', 1);
    }

    checkErrorMessageExist(name){
        cy.get('p.response', { timeout: 10000 }).should('exist');
    }
}

module.exports = {Member}