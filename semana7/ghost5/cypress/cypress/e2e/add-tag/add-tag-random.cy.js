const { signIn } = require('../../support/utils');
import { faker } from '@faker-js/faker';
const { Tag } = require('../../pageObjects/tag');

describe('Add Tags', function() {

    const tag = new Tag();

    it('Editar información de un tag existente', function() {
        signIn();
        for (let index = 0; index < 3; index++) {
            let tagName = faker.string.alpha(10);
            cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                if (length === 1) {
                    tag.clickNavigateTags();
                } else {
                    tag.clickFirstNavigateTags();
                }
            });
            cy.wait(1000);
            
            tag.clickEditaLastTag();
            cy.wait(1000);
            
            tag.clearName();
            cy.wait(1000);

            tag.name(tagName);
            cy.wait(1000);
            
            tag.slug(faker.string.alpha(10));
            cy.wait(1000);

            tag.clearDescription();
            cy.wait(1000);

            tag.description(faker.lorem.lines(3));
            cy.wait(1000);

            tag.save();
            cy.wait(1000);

            tag.clickFirstNavigateEmberView();
            cy.wait(1000);

            tag.checkTitleInList(tagName);
        }
    })

    it('Editar información de un tag existente dejando campos vacios', function() {
        signIn();
        for (let index = 11; index < 14; index++) {
            let tagName = faker.string.alpha(10);

            cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                if (length === 1) {
                    tag.clickNavigateTags();
                } else {
                    tag.clickFirstNavigateTags();
                }
            });
            cy.wait(1000);
            
            tag.clickEditaLastTag();
            cy.wait(1000);
            
            tag.clearName();
            cy.wait(1000);

            tag.name(tagName);
            cy.wait(1000);

            tag.slug(faker.string.alpha(10));
            cy.wait(1000);

            tag.clearDescription();
            cy.wait(1000);

            tag.save();
            cy.wait(1000);

            tag.clickFirstNavigateEmberView();
            cy.wait(1000);

            tag.checkTitleInList(tagName);
        }
    })
    
    
})