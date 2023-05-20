const { signIn } = require('../../support/utils');

describe('Add Tags', function() {

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

    tagData.forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con menos de 191 caracteres en el campo slug.', function() {
            let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags");
            signIn();
            cy.get('a[href="#/tags/"].ember-view').click();
            cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
            cy.get('#tag-name').type(data.name);
            cy.get('#tag-slug').clear().type(data.slug);
            cy.get('#tag-description').type(data.description);
            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000)
            cy.get('a[href="#/tags/"].ember-view').first().click();
            cy.wait(2000)
            cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
        })
    });

    tagDataLongSlug.forEach((data) => {
        it('Crear un nuevo tag desde el panel de Tags con mas de 191 caracteres en el campo slug.', function() {
            let screen = screenshot.bind(null, "Add Tags", "Crear un nuevo tag desde el panel de Tags");
            signIn();
            cy.get('a[href="#/tags/"].ember-view').click();
            cy.get('a[href="#/tags/new/"].ember-view.gh-btn.gh-btn-primary').click();
            cy.get('#tag-name').type(data.name);
            cy.get('#tag-slug').clear().type(data.slug);
            cy.get('#tag-description').type(data.description);
            cy.get('button[data-test-button="save"]').click();
            cy.wait(2000)
            cy.get('a[href="#/tags/"].ember-view').first().click();
            cy.wait(2000)
            cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(':contains("Tag 1")').should('have.length.at.least', 1);
        })
    });
    it('Editar información de un tag existente', function() {
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 0; index < 10; index++) {
                cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/tags/"]').click();
                    } else {
                        cy.get('href="#/tags/"]').first().click()
                    }
                });
                cy.wait(1000);

                cy.get('a[title="Edit tag"').last().click();
                cy.wait(1000);
                
                cy.get('#tag-name').clear();
                cy.wait(1000);

                cy.get('#tag-name').type(tags[index].name);
                cy.wait(1000);

                cy.get('#tag-slug').clear();
                cy.wait(1000);
                
                cy.get('#tag-slug').type(tags[index].slug);
                cy.wait(1000);
                
                cy.get('#tag-description').clear();
                cy.wait(1000);
                
                cy.get('#tag-description').type(tags[index].description);
                cy.wait(1000);
                
                cy.get('button[data-test-button="save"]').click();
                cy.wait(1000);
                
                cy.get('a[href="#/tags/"].ember-view').first().click();
                cy.wait(1000);

                cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(`:contains(${tags[index].name})`).should('have.length.at.least', 1);
            }
        })
    })

    it('Editar información de un tag existente dejando campos vacios', function() {
        signIn();
        cy.fixture('tags.json').then((tags)=>{
            for (let index = 11; index < 21; index++) {
                cy.get('a[href="#/tags/"].ember-view').its('length').then((length) => {
                    if (length === 1) {
                        cy.get('a[href="#/tags/"]').click();
                    } else {
                        cy.get('href="#/tags/"]').first().click()
                    }
                });
                cy.wait(1000);
                
                cy.get('a[title="Edit tag"').last().click();
                cy.wait(1000);
                
                cy.get('#tag-name').clear();
                cy.wait(1000);
                
                cy.get('#tag-name').type(tags[index].name);
                cy.wait(1000);
                
                cy.get('#tag-slug').clear();
                cy.wait(1000);
                
                cy.get('#tag-description').clear();
                cy.wait(1000);
                
                cy.get('button[data-test-button="save"]').click();
                cy.wait(1000);
                
                cy.get('a[href="#/tags/"].ember-view').first().click();
                cy.wait(1000);
                
                cy.get('h3.gh-tag-list-name', { timeout: 10000 }).filter(`:contains(${tags[index].name})`).should('have.length.at.least', 1);
            }
        })
    })
    
    
})