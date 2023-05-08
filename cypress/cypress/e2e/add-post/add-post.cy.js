const { signIn } = require('../../support/utils');

describe('Add Post', function() {
    it('Registrar y Publicar un nuevo Post', function() {
        signIn();

        cy.wait(1000);
        cy.get('[title="New post"]').click();
        cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
        cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post');
        cy.get('div[data-placeholder="Begin writing your post..."]').type('lorem Ipsum Dolor Sip ammet');
        cy.wait(1000);
        cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('div > div > div.gh-publish-cta > button').click();
        cy.wait(1000);
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000);
        cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post');
    });

    it('Registrar y Publicar un nuevo Post con imagen', () => {
        signIn();
      
        cy.wait(1000);
        cy.get('[title="New post"]').click();
        cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
        cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post con Imagen');
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}');
        cy.wait(1000);
        cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('div > div > div.gh-publish-cta > button').click();
        cy.wait(1000);
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000);
        cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post con Imagen');
      });

      it('Registrar y Publicar un nuevo Post con boton', () => {
        signIn();

        cy.wait(1000);
        cy.get('[title="New post"]').click();
        cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
        cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post con boton');
        cy.get('div[data-placeholder="Begin writing your post..."]').type('/button{enter}');
        cy.get('input.gh-input#button-text-input[placeholder="Add button text"]').type('Ir a Uniandes');
        cy.get('input.gh-input-with-select-input[placeholder="https://yoursite.com/#/portal/signup/"]').type('https://sistemas.uniandes.edu.co/maestrias/miso/virtual/');
        cy.wait(1000);
        cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('div > div > div.gh-publish-cta > button').click();
        cy.wait(1000);
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000);
        cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post con boton');
      });

      it("Registrar y Publicar un nuevo Post con imagen y boton y texto", () => {
        signIn();

        cy.wait(1000);
        cy.get('[title="New post"]').click();
        cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
        cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post con Imagen y boton');
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}');
        cy.wait(1000);
        cy.get('div[data-placeholder="Begin writing your post..."]').type('/button{enter}');
        cy.get('input.gh-input#button-text-input[placeholder="Add button text"]').type('Ir a Uniandes');
        cy.get('input.gh-input-with-select-input[placeholder="https://yoursite.com/#/portal/signup/"]').type('https://sistemas.uniandes.edu.co/maestrias/miso/virtual/');
        cy.wait(1000);
        cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
        cy.wait(1000);
        cy.get('div > div > div.gh-publish-cta > button').click();
        cy.wait(1000);
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(1000);
        cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post con Imagen y boton');
      });

})