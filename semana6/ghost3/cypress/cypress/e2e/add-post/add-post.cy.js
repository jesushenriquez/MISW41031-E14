const { signIn, screenshot } = require('../../support/utils');
import 'cypress-wait-until';
describe('Add Post', function() {
        it('Registrar y Publicar un nuevo Post', function() {
            let screen = screenshot.bind(null, "Add Post", "Registrar y Publicar un nuevo Post");
            signIn();
            screen("paso1");
            
            cy.get('[title="New post"]').click();
            screen("paso2");
            cy.get('[placeholder="Post Title"]').invoke('attr','placeholder').should('contain','Post Title')
            screen("paso3");
            cy.get('[placeholder="Post Title"]').type('Titulo Primer Post');
            screen("paso4");
            cy.get('div[data-placeholder="Begin writing your post..."]').type('lorem Ipsum Dolor Sip ammet');
            screen("paso5");
            cy.get('.gh-publishmenu').click();//publicar
            screen("paso6");
            cy.get('.gh-publishmenu-button').click();
            screen("paso7");
            cy.waitUntil(() => cy.contains('Published').should('exist'), { timeout: 5000, interval: 500 });
            screen("paso8");
        });

        it('Registrar y Publicar un nuevo Post con imagen', () => {
            let screen = screenshot.bind(null, "Add Post", "Registrar y Publicar un nuevo Post con imagen");
            signIn();
            screen("paso1");
            cy.get('[title="New post"]').click();
            screen("paso2");
            cy.get('[placeholder="Post Title"]').invoke('attr','placeholder').should('contain','Post Title')
            screen("paso3");
            cy.get('[placeholder="Post Title"]').type('Titulo Primer Post con Imagen');
            screen("paso4");
            cy.get('div[data-placeholder="Begin writing your post..."]').type('/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}');
            screen("paso5");
            cy.get('.gh-publishmenu').click();//publicar
            screen("paso6");
            cy.get('.gh-publishmenu-button').click();
            screen("paso7");
            cy.waitUntil(() => cy.contains('Published').should('exist'), { timeout: 5000, interval: 500 });
            screen("paso8");

        });
})