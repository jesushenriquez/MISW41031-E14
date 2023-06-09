const { signIn } = require('../../support/utils');
const { Tag } = require('../../pageObjects/tag');

describe('Add Tags', function() {

    const tag = new Tag();

    let names = ["Josh", "Max", "Jhonn", "Terry", "Wilson", "Mark"];
    let slugs = ["blue", "red", "green", "orange", "gray", "black"];
    let descriptions = [
        "accept", 
        "afford", 
        "agree", 
        "alert", 
        "allow", 
        "welcome", 
        "wish", 
        "wobble", 
        "wonder", 
        "work", 
        "worry", 
        "wrap", 
        "wreck"
    ];


    const tagWithoutData = [
        { 
            id: 1
        },
        { 
            id: 2
        },
        { 
            id: 3
        }
    ];

    const tagNormalData = [
        { 
            name: 'Tecnology',
            color: '232323',
            description: 'This slug is for tecnology topics.'
        },
        { 
            name: 'Architecture',
            color: '000000',
            description: 'This slug is for architecture topics.'
        },
        { 
            name: 'Software Development',
            color: 'ffffff',
            description: 'This slug is for software development topics.'
        }
    ];

    const tagData = [
        { 
            name: 'Tecnology',
            color: '232323',
            slug: 'LabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasraz',
            description: 'This slug is for tecnology topics.'
        },
        { 
            name: 'Architecture',
            color: '000000',
            slug: 'SolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadoss',
            description: 'This slug is for architecture topics.'
        },
        { 
            name: 'Software Development',
            color: 'ffffff',
            slug: 'DestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadever',
            description: 'This slug is for software development topics.'
        },
        { 
            name: 'Blockchain',
            color: '0f0f0f',
            slug: 'SuspensiónperpetuadeseraflorandodesconciertosquehablandeloscaminosolvidadosSuspensiónperpetuadeseraflorandodesconciertosquehablandeloscaminosolvidadosSuspensiónperpetuadeseraflorandodescoooo',
            description: 'This slug is for blockchain topics.'
        },
        { 
            name: 'Databases',
            color: '234567',
            slug: 'MiradasentrelazadassecretoscompartidosenununiversosecretoquenadiepercibeMiradasentrelazadassecretoscompartidosenununiversosecretoquenadiepercibeMiradasentrelazadassecretoscompartidosenununiv',
            description: 'This slug is for databases topics.'
        },
        { 
            name: 'Spring Framework',
            color: '000987',
            slug: 'VoceserrantesenlanocheclamanporsalvaciónenunmundodesolaciónytristezaVoceserrantesenlanocheclamanporsalvaciónenunmundodesolaciónytristezaVoceserrantesenlanocheclamanporsalvaciónenunmundodesol',
            description: 'This slug is for spring framework topics.'
        },
        { 
            name: 'Spring Boot',
            color: '8970ff',
            slug: 'LatidosdiluidosenlasombraentintadaunahistoriaquesoloelvientoconoceLatidosdiluidosenlasombraentintadaunahistoriaquesoloelvientoconoceLatidosdiluidosenlasombraentintadaunahistoriaquesoloelvien',
            description: 'This slug is for spring boot topics.'
        },
        { 
            name: 'Angular',
            color: 'fff334',
            slug: 'SilencioabsolutoenmarañadodepalabrasquedibujanimágenesdesvanecidasyetéreasSilencioabsolutoenmarañadodepalabrasquedibujanimágenesdesvanecidasyetéreasSilencioabsolutoenmarañadodepalabrasquedib',
            description: 'This slug is for angular topics.'
        },
        { 
            name: 'React',
            color: '009327',
            slug: 'AmaneceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantil',
            description: 'This slug is for react topics.'
        },
        { 
            name: 'Kotlin',
            color: 'f9f832',
            slug: 'ertyeceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantil',
            description: 'This slug is for kotlin topics.'
        }
    ];

    const tagNameData = [
        { 
            name: 'LabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasraz',
            color: '232323',
            slug: 'Tecnology',
            description: 'This slug is for tecnology topics.'
        },
        { 
            name: 'SolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadoss',
            color: '000000',
            slug: 'Architecture',
            description: 'This slug is for architecture topics.'
        },
        { 
            name: 'DestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadever',
            color: 'ffffff',
            slug: 'Software Development',
            description: 'This slug is for software development topics.'
        }
    ];

    const tagLongNameData = [
        { 
            name: 'LabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasrazzz',
            color: '232323',
            slug: 'Tecnology',
            description: 'This slug is for tecnology topics.'
        },
        { 
            name: 'SolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadossss',
            color: '000000',
            slug: 'Architecture',
            description: 'This slug is for architecture topics.'
        },
        { 
            name: 'DestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadeverrr',
            color: 'ffffff',
            slug: 'Software Development',
            description: 'This slug is for software development topics.'
        }
    ];

    const tagDataLongSlug = [
        { 
            name: 'Tecnology',
            color: '232323',
            slug: '12LabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasrazonesimposiblesLabellezadeunahistoriaradicaríasuenfoqueendetenidasraz',
            description: 'This slug is for tecnology topics.'
        },
        { 
            name: 'Architecture',
            color: '000000',
            slug: '34SolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadospredeterminadosSolounacaminomudohilvanandodestinosocultossintrazadoss',
            description: 'This slug is for architecture topics.'
        },
        { 
            name: 'Software Development',
            color: 'ffffff',
            slug: '56DestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadeversosinconclusosDestellosdeesperanzadanzansobremisalmaentrelazadadever',
            description: 'This slug is for software development topics.'
        },
        { 
            name: 'Blockchain',
            color: '0f0f0f',
            slug: '78SuspensiónperpetuadeseraflorandodesconciertosquehablandeloscaminosolvidadosSuspensiónperpetuadeseraflorandodesconciertosquehablandeloscaminosolvidadosSuspensiónperpetuadeseraflorandodescoooo',
            description: 'This slug is for blockchain topics.'
        },
        { 
            name: 'Databases',
            color: '234567',
            slug: '90MiradasentrelazadassecretoscompartidosenununiversosecretoquenadiepercibeMiradasentrelazadassecretoscompartidosenununiversosecretoquenadiepercibeMiradasentrelazadassecretoscompartidosenununiv',
            description: 'This slug is for databases topics.'
        },
        { 
            name: 'Spring Framework',
            color: '000987',
            slug: '12VoceserrantesenlanocheclamanporsalvaciónenunmundodesolaciónytristezaVoceserrantesenlanocheclamanporsalvaciónenunmundodesolaciónytristezaVoceserrantesenlanocheclamanporsalvaciónenunmundodesol',
            description: 'This slug is for spring framework topics.'
        },
        { 
            name: 'Spring Boot',
            color: '8970ff',
            slug: '34LatidosdiluidosenlasombraentintadaunahistoriaquesoloelvientoconoceLatidosdiluidosenlasombraentintadaunahistoriaquesoloelvientoconoceLatidosdiluidosenlasombraentintadaunahistoriaquesoloelvien',
            description: 'This slug is for spring boot topics.'
        },
        { 
            name: 'Angular',
            color: 'fff334',
            slug: '56SilencioabsolutoenmarañadodepalabrasquedibujanimágenesdesvanecidasyetéreasSilencioabsolutoenmarañadodepalabrasquedibujanimágenesdesvanecidasyetéreasSilencioabsolutoenmarañadodepalabrasquedib',
            description: 'This slug is for angular topics.'
        },
        { 
            name: 'React',
            color: '009327',
            slug: '78AmaneceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantil',
            description: 'This slug is for react topics.'
        },
        { 
            name: 'Kotlin',
            color: 'f9f832',
            slug: '90ertyeceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantiladomientraselmundodespiertahaciadestinoinciertoAmaneceradormecidosobreelacantil',
            description: 'This slug is for kotlin topics.'
        }
    ];

    const tagDataDescription = [
        {
          name: 'Tecnology',
          color: '232323',
          slug: 'TecnologySlug',
          description: 'This slug is for technology topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id fermentum efficitur. Proin auctor finibus massa a pulvinar. Vivamus ac dui at metus consectetur interdum. Nam eu convallis turpis, a luctus lacus. Nullam ultrices, mauris et pulvinar viverra, justo velit finibus mi, sit amet suscipit lacus mi in ex. Quisque eget finibus turpis. Sed id tempor purus. Etiam tristique lorem sed urna efficitur, id feugiat metus fermentum. Quisque finibus'
        },
        {
          name: 'Architecture',
          color: '000000',
          slug: 'ArchitectureSlug',
          description: 'This slug is for architecture topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id fermentum efficitur. Proin auctor finibus massa a pulvinar. Vivamus ac dui at metus consectetur interdum. Nam eu convallis turpis, a luctus lacus. Nullam ultrices, mauris et pulvinar viverra, justo velit finibus mi, sit amet suscipit lacus mi in ex. Quisque eget finibus turpis. Sed id tempor purus. Etiam tristique lorem sed urna efficitur, id feugiat metus fermentum. Quisque fini0'
        },
        {
          name: 'Software Development',
          color: 'ffffff',
          slug: 'SoftwareDevSlug',
          description: 'This slug is for software development topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id fermentum efficitur. Proin auctor finibus massa a pulvinar. Vivamus ac dui at metus consectetur interdum. Nam eu convallis turpis, a luctus lacus. Nullam ultrices, mauris et pulvinar viverra, justo velit finibus mi, sit amet suscipit lacus mi in ex. Quisque eget finibus turpis. Sed id tempor purus. Etiam tristique lorem sed urna efficitur, id feugiat metus fermentum. Quisq'
        }
    ];

    const tagDataLongDescription = [
        {
          name: 'Tecnology',
          color: '232323',
          slug: 'TecnologySlug',
          description: 'This slug is for technology topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id fermentum efficitur. Proin auctor finibus massa a pulvinar. Vivamus ac dui at metus consectetur interdum. Nam eu convallis turpis, a luctus lacus. Nullam ultrices, mauris et pulvinar viverra, justo velit finibus mi, sit amet suscipit lacus mi in ex. Quisque eget finibus turpis. Sed id tempor purus. Etiam tristique lorem sed urna efficitur, id feugiat metus fermentum. Quisque finibusss'
        },
        {
          name: 'Architecture',
          color: '000000',
          slug: 'ArchitectureSlug',
          description: 'This slug is for architecture topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id fermentum efficitur. Proin auctor finibus massa a pulvinar. Vivamus ac dui at metus consectetur interdum. Nam eu convallis turpis, a luctus lacus. Nullam ultrices, mauris et pulvinar viverra, justo velit finibus mi, sit amet suscipit lacus mi in ex. Quisque eget finibus turpis. Sed id tempor purus. Etiam tristique lorem sed urna efficitur, id feugiat metus fermentum. Quisque fini000'
        },
        {
          name: 'Software Development',
          color: 'ffffff',
          slug: 'SoftwareDevSlug',
          description: 'This slug is for software development topics. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod magna id fermentum efficitur. Proin auctor finibus massa a pulvinar. Vivamus ac dui at metus consectetur interdum. Nam eu convallis turpis, a luctus lacus. Nullam ultrices, mauris et pulvinar viverra, justo velit finibus mi, sit amet suscipit lacus mi in ex. Quisque eget finibus turpis. Sed id tempor purus. Etiam tristique lorem sed urna efficitur, id feugiat metus fermentum. Quisqqq'
        }
    ];

    tagData.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug.', function() {
            const description = data.description + " -- " + descriptions[randomIndex(descriptions.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name);
        })
    });

    tagDataLongSlug.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug.', function() {
            const description = data.description + " -- " + descriptions[randomIndex(descriptions.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(description);
            tag.save();
            tag.checkErrorInTag();
        })
    });

    tagDataDescription.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 500 caracteres en el campo description.', function() {
            const name = data.name + " --- " + names[randomIndex(names.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name)
        })
    });

    tagDataLongDescription.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 500 caracteres en el campo description.', function() {
            const name = data.name + " --- " + names[randomIndex(names.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(name);
            tag.slug(data.slug);
            tag.description(data.description);
            tag.save();
            tag.checkErrorInTag();
        })
    });

    tagNameData.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo name.', function() {
            const description = data.description + " -- " + descriptions[randomIndex(descriptions.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(data.name)
        })
    });

    tagLongNameData.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo name.', function() {
            const description = data.description + " -- " + descriptions[randomIndex(descriptions.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(data.name);
            tag.slug(data.slug);
            tag.description(description);
            tag.save();
            tag.checkErrorInTag();
        })
    })

    tagNormalData.slice(0, 3).forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags', function() {
            const name = data.name + " --- " + names[randomIndex(names.length)];
            signIn();
            tag.clickTagLink();
            tag.clickNavigateToTagEditor();
            tag.name(name);
            tag.description(data.description);
            tag.save();
            tag.clickTagLink();
            tag.checkTitleInList(name)
        })
    });

    tagWithoutData.slice(0, 3).forEach((data) => {
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
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 0; index < 3; index++) {
                let tagName = `${tags[index].name} ${names[Math.floor(Math.random()*names.length)]}`;
                let tagSlug = `${tags[index].slug}-${slugs[Math.floor(Math.random()*slugs.length)]}`;
                let tagDescription = `${tags[index].description} ${descriptions[Math.floor(Math.random()*descriptions.length)]}`;

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
                
                tag.slug(tagSlug);
                cy.wait(1000);
                
                tag.clearDescription();
                cy.wait(1000);
                
                tag.description(tagDescription);
                cy.wait(1000);
                
                tag.save();
                cy.wait(1000);
                
                tag.clickFirstNavigateEmberView();
                cy.wait(1000);

                tag.checkTitleInList(tagName);
            }
        })
    })

    it('Editar información de un tag existente dejando campos vacios', function() {
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 11; index < 14; index++) {
                let tagName = `${tags[index].name} ${names[Math.floor(Math.random()*names.length)]}`;
                let tagSlug = `${tags[index].slug}-${slugs[Math.floor(Math.random()*slugs.length)]}`;
                let tagDescription = `${tags[index].description} ${descriptions[Math.floor(Math.random()*descriptions.length)]}`;
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
                
                tag.slug(tagSlug);
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
    
    
})

function randomIndex(maximo) {
    return Math.floor(Math.random() * (maximo + 1));
}