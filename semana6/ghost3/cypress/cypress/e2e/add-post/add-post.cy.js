const { signIn } = require('../../support/utils');

import 'cypress-wait-until';
describe('Add Post', function() {
        it('Registrar y Publicar un nuevo Post', function() {
            signIn();
            cy.get('[title="New post"]').click();
            cy.get('[placeholder="Post Title"]').invoke('attr','placeholder').should('contain','Post Title')
            cy.get('[placeholder="Post Title"]').type('Titulo Primer Post');
            cy.get('div[data-placeholder="Begin writing your post..."]').type('lorem Ipsum Dolor Sip ammet');
            cy.get('.gh-publishmenu').click();//publicar
            cy.get('.gh-publishmenu-button').click();
            cy.waitUntil(() => cy.contains('Published').should('exist'), { timeout: 5000, interval: 500 });
        });

        it('Registrar y Publicar un nuevo Post con imagen', () => {
            signIn();
            cy.get('[title="New post"]').click();
            cy.get('[placeholder="Post Title"]').invoke('attr','placeholder').should('contain','Post Title')
            cy.get('[placeholder="Post Title"]').type('Titulo Primer Post con Imagen');
            cy.get('div[data-placeholder="Begin writing your post..."]').type('/image https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png{enter}');
            cy.get('.gh-publishmenu').click();//publicar
            cy.get('.gh-publishmenu-button').click();
            cy.waitUntil(() => cy.contains('Published').should('exist'), { timeout: 5000, interval: 500 });

        });

        it('Registrar y Publicar un nuevo Post con youtube', () => {
            signIn();
            cy.get('[title="New post"]').click();
            cy.get('[placeholder="Post Title"]').invoke('attr','placeholder').should('contain','Post Title')
            cy.get('[placeholder="Post Title"]').type('Titulo Primer Post con boton');
            cy.get('div[data-placeholder="Begin writing your post..."]').type('/youtube https://www.youtube.com/watch?v=1Nr_tqkMsJs{enter}');
            cy.waitUntil(() => cy.get('iframe.bn.miw-100').should('exist'), { timeout: 10000, interval: 1000 });
            cy.get('.gh-publishmenu').click();//publicar
            cy.get('.gh-publishmenu-button').click();
            cy.waitUntil(() => cy.contains('Published').should('exist'), { timeout: 5000, interval: 500 });
        });

})