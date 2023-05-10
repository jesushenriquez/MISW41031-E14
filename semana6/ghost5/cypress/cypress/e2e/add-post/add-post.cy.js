const { signIn, screenshot } = require('../../support/utils');
describe('Add Post', function() {
    it('Registrar y Publicar un nuevo Post', function() {
            let screen = screenshot.bind(null, "Add Post", "Registrar y Publicar un nuevo Post");
            signIn();
            
            cy.wait(1000);
            cy.get('[title="New post"]').click();
            screen("paso1");
            cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
            screen("paso2");
            cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post');
            screen("paso3");
            cy.get('div[data-placeholder="Begin writing your post..."]').type('lorem Ipsum Dolor Sip ammet');
            cy.wait(1000);
            screen("paso4");
            cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
            cy.wait(1000);
            screen("paso5");
            cy.get('div > div > div.gh-publish-cta > button').click();
            cy.wait(1000);
            screen("paso6");
            cy.get('button[data-test-button="confirm-publish"]').click();
            cy.wait(1000);
            screen("paso7");
            cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post');
            screen("paso8");
        });

        it('Registrar y Publicar un nuevo Post con imagen', () => {
            let screen = screenshot.bind(null, "Add Post", "Registrar y Publicar un nuevo Post con imagen");
            signIn();
            cy.wait(1000);
            screen("paso1");
            cy.get('[title="New post"]').click();
            screen("paso2");
            cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
            screen("paso3");
            cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post con Imagen');
            cy.wait(1000);
            screen("paso4");
            cy.get('div[data-placeholder="Begin writing your post..."]').type('/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}');
            cy.wait(1000);
            screen("paso5");
            cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
            cy.wait(1000);
            screen("paso6");
            cy.get('div > div > div.gh-publish-cta > button').click();
            cy.wait(1000);
            screen("paso7");
            cy.get('button[data-test-button="confirm-publish"]').click();
            cy.wait(1000);
            screen("paso8");
            cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post con Imagen');
            screen("paso9");
        });

        it('Registrar y Publicar un nuevo Post con boton', () => {
            let screen = screenshot.bind(null, "Add Post", "Registrar y Publicar un nuevo Post con boton");
            signIn();
            cy.wait(1000);
            screen("paso1");
            cy.get('[title="New post"]').click();
            screen("paso2");
            cy.get('textarea[data-test-editor-title-input]').invoke('attr','placeholder').should('contain','Post title')
            cy.get('textarea[data-test-editor-title-input]').type('Titulo Primer Post con boton');
            screen("paso3");
            cy.get('div[data-placeholder="Begin writing your post..."]').type('/button{enter}');
            screen("paso4");
            cy.get('input.gh-input#button-text-input[placeholder="Add button text"]').type('Ir a Uniandes');
            screen("paso5");
            cy.get('input.gh-input-with-select-input[placeholder="https://yoursite.com/#/portal/signup/"]').type('https://sistemas.uniandes.edu.co/maestrias/miso/virtual/');
            cy.wait(1000);
            screen("paso6");
            cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger').click();
            cy.wait(1000);
            screen("paso7");
            cy.get('div > div > div.gh-publish-cta > button').click();
            cy.wait(1000);
            screen("paso8");
            cy.get('button[data-test-button="confirm-publish"]').click();
            cy.wait(1000);
            screen("paso9");
            cy.contains('.gh-post-bookmark-title', 'Titulo Primer Post con boton');
            screen("paso10");
        });

})