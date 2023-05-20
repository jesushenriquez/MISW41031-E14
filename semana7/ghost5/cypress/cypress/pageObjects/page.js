class Page {
  clickPageLink() {
    cy.get('a[data-test-nav="pages"]').click();
  }
  clickNavigateToPageEditor() {
    cy.get('a[href="#/editor/page/"]').click();
  }
  title(text) {
    cy.get('textarea[placeholder="Page title"]').type(text);
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

  gotoPagesList(){
            cy.get('a[data-test-link="pages"]').click();

  }

  checkTitleInList(title){
            cy.get("h3.gh-content-entry-title")
              .filter(`:contains("${title}")`)
              .should("have.length.at.least", 1);
  }
}

module.exports = {Page}