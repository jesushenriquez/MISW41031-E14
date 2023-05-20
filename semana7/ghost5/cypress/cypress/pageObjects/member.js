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

    typeName(name) {
        cy.get('#member-name').type(name);
    }

    typeEmail(email) {
        cy.get('#member-email').type(email);
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
}

module.exports = {Member}