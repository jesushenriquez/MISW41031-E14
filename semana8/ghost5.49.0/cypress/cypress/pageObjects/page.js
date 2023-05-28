class Page {
  clickFirstPageLink() {
    cy.get('a[data-test-nav="pages"]').first().click();
  }

  clickPageLink() {
    cy.get('a[data-test-nav="pages"]').click();
  }

  clickFirstPagesListElement(){
    cy.get('a[class="ember-view permalink gh-list-data gh-post-list-title"]').first().click();
  }

  clickNavigateToPageEditor() {
    cy.get('a[href="#/editor/page/"]').click();
  }

  clearTitle(){
    cy.get('textarea[placeholder="Page title"]').clear();
  }

  title(text) {
    cy.get('textarea[placeholder="Page title"]').type(text);
  }

  typeDescription(description){
    cy.get('div[data-placeholder="Begin writing your page..."]').type(description);
  }

  clearDescription(){
    cy.get('div[data-placeholder="Begin writing your page..."]').clear();
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

  publishAndBackToEditor() {
    cy.get('button[data-test-button="publish-flow"]').click();
    cy.get('button[data-test-button="continue"]').click();
    cy.get('button[data-test-button="confirm-publish"]').click();
    cy.get('button[data-test-button="back-to-editor"]').click();

  }

  publishUpdate(){
    cy.get('button[data-test-button="publish-save"]').click();
  }

  gotoPagesList(){
    cy.get('a[data-test-link="pages"]').click();
  }

  clickNavigationPage(){
    cy.get('a[href="#/pages/"]').click();
  }

  checkTitleInList(title){
    cy.get("h3.gh-content-entry-title")
      .filter(`:contains("${title}")`)
      .should("have.length.at.least", 1);
  }

  checkEmptyTitleInList(){
    cy.get("h3.gh-content-entry-title")
      .filter(`:contains("Untitled")`)
      .should("have.length.at.least", 1);
  }
}

module.exports = {Page}