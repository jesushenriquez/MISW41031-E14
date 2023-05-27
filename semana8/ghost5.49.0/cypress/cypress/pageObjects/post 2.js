class Post {
  title(value) {
    cy.get("textarea[data-test-editor-title-input]").type(value);
  }
  type(value) {
    cy.get("div.koenig-editor__editor-wrapper > div").last().scrollIntoView();
    cy.get("div.koenig-editor__editor-wrapper > div")
      .last()
      .type(`${value}{enter}`, { force: true });
  }
  addSpotify(url) {
    this.type(`/Spotify ${url}{enter}`);
  }
  addYoutube(url) {
    this.type(`/youtube ${url}{enter}`);
  }
  addImage(url) {
    this.type(`/image ${url}{enter}`);
  }
  addButton(text, url) {
    this.type("/button{enter}");
    cy.get(
      'input.gh-input#button-text-input[placeholder="Add button text"]'
    ).type(text);
    cy.get(
      'input.gh-input-with-select-input[placeholder="https://yoursite.com/#/portal/signup/"]'
    ).type(url);
  }
  addNFT(url) {
    this.type(`/nft ${url}{enter}`);
  }
  checkPlaceHolderTitle() {
    cy.get("textarea[data-test-editor-title-input]")
      .invoke("attr", "placeholder")
      .should("contain", "Post title");
  }
  checkErrorParsingUrl() {
    cy.contains("span.mr3", "There was an error when parsing the URL.");
  }
  publish() {
    cy.get(
      "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
    ).click();
    cy.get("div > div > div.gh-publish-cta > button").click();
    cy.get('button[data-test-button="confirm-publish"]').click();
  }
  schedule() {
    cy.get(
      "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
    ).click();
    cy.get("button.gh-publish-setting-title").last().click();
    cy.contains("Schedule for later").parent("div.gh-radio").click();
    cy.get(
      "div > div > div.gh-publish-settings > div.gh-publish-setting.last > button > div > span"
    ).contains("In 10 minutes");
    cy.get("div > div > div.gh-publish-cta > button").click();
    cy.get('button[data-test-button="confirm-publish"]').click();
  }
  checkPublish(title) {
    cy.contains(".gh-post-bookmark-title", title);
  }
}


module.exports = {Post}