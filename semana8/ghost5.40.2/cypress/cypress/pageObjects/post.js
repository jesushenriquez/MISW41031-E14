class Post {
  async title(value) {
    cy.get("textarea[data-test-editor-title-input]").type(value);
  }
  async type(value) {
    cy.get("div.koenig-editor__editor-wrapper > div").last().scrollIntoView();
    cy.get("div.koenig-editor__editor-wrapper > div")
      .last()
      .type(`${value}{enter}`, { force: true });
  }
  async addSpotify(url) {
    this.type(`/Spotify ${url}`);
  }
  async addYoutube(url) {
    this.type(`/youtube ${url}`);
  }
  async addImage(url) {
    this.type(`/image ${url}`);
  }
  async addButton(text, url) {
    this.type(`/button`);
   
    cy.get(
      'input.gh-input#button-text-input[placeholder="Add button text"]'
    ).type(text);
   
    cy.get(
      'input.gh-input-with-select-input[placeholder="https://yoursite.com/#/portal/signup/"]'
    ).type(url);
   
  }
  async addNFT(url) {
    this.type(`/nft ${url}{enter}`);
  }
  async checkPlaceHolderTitle() {
    cy.get("textarea[data-test-editor-title-input]")
      .invoke("attr", "placeholder")
      .should("contain", "Post title");
  }
  async checkErrorParsingUrl() {
    cy.contains("span.mr3", "There was an error when parsing the URL.");
  }
  async publish() {
    cy.get(
      "header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger"
    ).click();
    cy.get("div > div > div.gh-publish-cta > button").click();
    cy.get('button[data-test-button="confirm-publish"]').click();
  }
  async schedule() {
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
  async checkPublish(title) {
    cy.contains(".gh-post-bookmark-title", title);
  }

  async goToPostList() {
    cy.navigate("http://localhost:2368/ghost/#/posts");
  }
}

module.exports = { Post };
