const { signIn, screenshot } = require('../../support/utils');
const { Tag } = require('../../pageObjects/tag');

describe('Add Tags', function() {

    const tag = new Tag();

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

    /**
   * -------------------------------------------------------------
   *                    Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug
   * -------------------------------------------------------------
   */
    tagData.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.slug(data.slug);
            screen("paso5");
            tag.description(data.description);
            screen("paso6");
            tag.save();
            screen("paso7");
            tag.clickTagLink();
            screen("paso8");
            tag.checkTitleInList(data.name);
            screen("paso9");
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug
   * -------------------------------------------------------------
   */
    tagDataLongSlug.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.slug(data.slug);
            screen("paso5");
            tag.description(data.description);
            screen("paso6");
            tag.save();
            screen("paso7");
            tag.checkErrorInTag();
            screen("paso8");
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con menos de 500 caracteres en el campo description
   * -------------------------------------------------------------
   */
    tagDataDescription.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 500 caracteres en el campo description.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags con menos de 500 caracteres en el campo description. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.slug(data.slug);
            screen("paso5");
            tag.description(data.description);
            screen("paso6");
            tag.save();
            screen("paso7");
            tag.clickTagLink();
            screen("paso8");
            tag.checkTitleInList(data.name);
            screen("paso9");
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con mas de 500 caracteres en el campo description
   * -------------------------------------------------------------
   */
    tagDataLongDescription.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 500 caracteres en el campo description.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags con mas de 500 caracteres en el campo description. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.slug(data.slug);
            screen("paso5");
            tag.description(data.description);
            screen("paso6");
            tag.save();
            screen("paso7");
            tag.checkErrorInTag();
            screen("paso8");
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo name
   * -------------------------------------------------------------
   */
    tagNameData.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo name.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo name. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.slug(data.slug);
            screen("paso5");
            tag.description(data.description);
            screen("paso6");
            tag.save();
            screen("paso7");
            tag.clickTagLink();
            screen("paso8");
            tag.checkTitleInList(data.name);
            screen("paso9");
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo name
   * -------------------------------------------------------------
   */
    tagLongNameData.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo name.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo name. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.slug(data.slug);
            screen("paso5");
            tag.description(data.description);
            screen("paso6");
            tag.save();
            screen("paso7");
            tag.checkErrorInTag();
            screen("paso8");
        })
    })

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags
   * -------------------------------------------------------------
   */
    tagNormalData.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.name(data.name);
            screen("paso4");
            tag.description(data.description);
            screen("paso5");
            tag.save();
            screen("paso6");
            tag.clickTagLink();
            screen("paso7");
            tag.checkTitleInList(data.name);
            screen("paso8");
        })
    });

    /**
   * -------------------------------------------------------------
   *  Crear un nuevo tag desde el panel de Tags sin datos en los campos
   * -------------------------------------------------------------
   */
    tagWithoutData.forEach((data, index) => {
        it('Crear un nuevo tag desde el panel de Tags sin datos en los campos.', function() {
            let screen = screenshot.bind(null, "Add Tag", `Crear un nuevo tag desde el panel de Tags sin datos en los campos. ${index}`);
            signIn();
            screen("paso1");
            tag.clickTagLink();
            screen("paso2");
            tag.clickNavigateToTagEditor();
            screen("paso3");
            tag.save();
            screen("paso4");
            tag.checkErrorInTag();
            screen("paso5");
        })
    })

    it('Editar información de un tag existente', function() {
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 0; index < 3; index++) {
                let screen = screenshot.bind(null, "Add Members", `Editar información de un tag existente ${index}`);
                cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                    if (length === 1) {
                        tag.clickNavigateTags();
                    } else {
                        tag.clickFirstNavigateTags();
                    }
                });
                cy.wait(1000);
                screen("paso1");

                tag.clickEditaLastTag();
                cy.wait(1000);
                screen("paso2");
                
                tag.clearName();
                cy.wait(1000);
                screen("paso3");

                tag.name(tags[index].name);
                cy.wait(1000);
                screen("paso4");

                tag.slug(tags[index].slug);
                cy.wait(1000);
                screen("paso5");

                tag.clearDescription();
                cy.wait(1000);
                screen("paso6");

                tag.description(tags[index].description);
                cy.wait(1000);
                screen("paso7");

                tag.save();
                cy.wait(1000);
                screen("paso8");

                tag.clickFirstNavigateEmberView();
                cy.wait(1000);
                screen("paso9");

                tag.checkTitleInList(tags[index].name);
                screen("paso10");
            }
        })
    })

    it('Editar información de un tag existente dejando campos vacios', function() {
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 11; index < 14; index++) {
                let screen = screenshot.bind(null, "Add Members", `Editar información de un tag existente dejando campos vacios ${index}`);

                cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                    if (length === 1) {
                        tag.clickNavigateTags();
                    } else {
                        tag.clickFirstNavigateTags();
                    }
                });
                cy.wait(1000);
                screen("paso1");

                tag.clickEditaLastTag();
                cy.wait(1000);
                screen("paso2");

                tag.clearName();
                cy.wait(1000);
                screen("paso3");
                
                tag.name(tags[index].name);
                cy.wait(1000);
                screen("paso4");

                tag.slug(tags[index].slug);
                cy.wait(1000);
                screen("paso5");

                tag.clearDescription();
                cy.wait(1000);
                screen("paso6");

                tag.save();
                cy.wait(1000);
                screen("paso7");

                tag.clickFirstNavigateEmberView();
                cy.wait(1000);
                screen("paso8");

                tag.checkTitleInList(tags[index].name);
                screen("paso9");
            }
        })
    })
    
    
})