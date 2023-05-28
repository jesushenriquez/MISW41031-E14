const { signIn } = require('../../support/utils');
import { faker } from '@faker-js/faker';
const { Tag } = require('../../pageObjects/tag');

describe('Add Tags', function() {

    const tag = new Tag();

      /**
   * -------------------------------------------------------------
   *                    Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug
   * -------------------------------------------------------------
   */
    generarTagsAleatorias(3, "SHORT_SLUG").forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name);
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug
   * -------------------------------------------------------------
   */
    generarTagsAleatorias(3, "LONG_SLUG").forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.checkErrorInTag();
        })
    });

     /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con menos de 500 caracteres en el campo description
   * -------------------------------------------------------------
   */
     generarTagsAleatorias(3, "SHORT_DESCRIPTION").forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 500 caracteres en el campo description.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name)
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con mas de 500 caracteres en el campo description
   * -------------------------------------------------------------
   */
    generarTagsAleatorias(3, "LONG_DESCRIPTION").forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 500 caracteres en el campo description.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.checkErrorInTag();
        })
    });


      /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo name
   * -------------------------------------------------------------
   */
      generarTagsAleatorias(3, "SHORT_NAME").forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo name.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name)
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo name
   * -------------------------------------------------------------
   */
    generarTagsAleatorias(3, "LONG_NAME").forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo name.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.checkErrorInTag();
        })
    })

     /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags
   * -------------------------------------------------------------
   */
     generarTagsAleatorias(3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.description(data.description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name)
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags sin datos en los campos
   * -------------------------------------------------------------
   */
    generarTagsAleatorias(3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags sin datos en los campos.', function() {
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.save();
            tag.checkErrorInTag();
        })
    })

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

function generarTagAleatoria() {
    return {
        name: faker.lorem.word(),
        color: faker.internet.color(),
        slug: faker.lorem.slug(),
        description: faker.lorem.sentence()
    };
}

function generarTagAleatoriaWithShortSlug() {
    const seed = faker.datatype.uuid();
    faker.seed(seed);
    
    return {
        name: faker.lorem.word(),
        color: faker.internet.color(),
        slug: generateTextWithoutSpaces(190),
        description: faker.lorem.sentence()
    };
}

function generarTagAleatoriaWithLongSlug() {
    const seed = faker.datatype.uuid();
    faker.seed(seed);
    
    return {
        name: faker.lorem.word(),
        color: faker.internet.color(),
        slug: generateTextWithoutSpaces(192),
        description: faker.lorem.sentence()
    };
}

function generarTagAleatoriaWithShortDescription() {
    const seed = faker.datatype.uuid();
    faker.seed(seed);
    
    return {
        name: faker.lorem.word(),
        color: faker.internet.color(),
        slug: faker.lorem.slug(),
        description: generateTextWithoutSpaces(499)
    };
}

function generarTagAleatoriaWithLongDescription() {
    const seed = faker.datatype.uuid();
    faker.seed(seed);
    
    return {
        name: faker.lorem.word(),
        color: faker.internet.color(),
        slug: faker.lorem.slug(),
        description: generateTextWithoutSpaces(501)
    };
}

function generarTagAleatoriaWithShortName() {
    const seed = faker.datatype.uuid();
    faker.seed(seed);
    
    return {
        name: generateTextWithoutSpaces(190),
        color: faker.internet.color(),
        slug: faker.lorem.slug(),
        description: faker.lorem.sentence()
    };
}

function generarTagAleatoriaWithLongName() {
    const seed = faker.datatype.uuid();
    faker.seed(seed);
    
    return {
        name: generateTextWithoutSpaces(192),
        color: faker.internet.color(),
        slug: faker.lorem.slug(),
        description: faker.lorem.sentence()
    };
}

function generarTagsAleatorias(cantidad, slugType) {
    let tags = [];
    for (let i = 0; i < cantidad; i++) {
        if(slugType == "SHORT_SLUG") { 
            tags.push(generarTagAleatoriaWithShortSlug());
        }else if(slugType == "LONG_SLUG") { 
            tags.push(generarTagAleatoriaWithLongSlug());
        } else if(slugType == "SHORT_DESCRIPTION") { 
            tags.push(generarTagAleatoriaWithShortDescription());
        } else if(slugType == "LONG_DESCRIPTION") { 
            tags.push(generarTagAleatoriaWithLongDescription());
        } else if(slugType == "SHORT_NAME") { 
            tags.push(generarTagAleatoriaWithShortName());
        } else if(slugType == "LONG_NAME") { 
            tags.push(generarTagAleatoriaWithLongName());
        } else {
            tags.push(generarTagAleatoria());
        }
        
    }
    return tags;
  }

function generateTextWithoutSpaces(length) {
    let text = '';
  
    while (text.length < length) {
      const word = faker.lorem.word();
      text += word;
    }
  
    return text.substr(0, length);
}
  