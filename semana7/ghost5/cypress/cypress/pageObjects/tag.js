class Tag {
    
    clickNavigateTags() {
      cy.get('a[href="#/tags/"]').click();
    }

    clickFirstNavigateTags() {
      cy.get('href="#/tags/"]').first().click()
    }

    clickFirstNavigateEmberView(){
      cy.get('a[href="#/tags/"].ember-view').first().click();
    }

    clickEditaLastTag(){
      cy.get('a[title="Edit tag"').last().click();
    }

    clearName(){
      cy.get('#tag-name').clear();
    }

    clearDescription(){
      cy.get('#tag-description').clear();
    }

    clickTagLink() {
      cy.wait(1000)
      cy.get('a[data-test-nav="tags"]').click();
      cy.wait(1000)
    }
    clickNavigateToTagEditor() {
        cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
    }
    name(text) {
        cy.get('#tag-name').type(text);
    }
    slug(text) {
        cy.get('#tag-slug').clear().type(text);
    }
    description(text) {
        cy.get('#tag-description').type(text);
    }
    type(value) {
      cy.get("div.koenig-editor__editor-wrapper > div").last().scrollIntoView();
      cy.get("div.koenig-editor__editor-wrapper > div")
        .last()
        .type(`${value}{enter}`, { force: true });
    }
    addImage(url) {
      this.type(`/image ${url}{enter}`);
    }
    addYoutube(url) {
      this.type(`/youtube ${url}{enter}`);
    }
    save() {
        cy.get('button[data-test-button="save"]').click();
    }
  
    gotoPagesList(){
              cy.get('a[data-test-link="pages"]').click();
  
    }
  
    checkTitleInList(title){
        cy.get('h3.gh-tag-list-name', { timeout: 10000 })
        .filter(`:contains(${title})`)
        .should('have.length.at.least', 1);
    }
    checkErrorInTag() {
        cy.get('[data-test-task-button-state="failure"]').should('be.visible');
    }
  }
  
  module.exports = {Tag}