const { signIn } = require('../../support/utils');

describe('Create Tags', function() {
    it('Crear un nuevo tag desde el panel de Tags', function() {
        signIn();

        //randomClick(10);
    })
})

var focused = false

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const functions = [
    randomClick,
    typeRandomString,
    selectRandomCombo,
    randomClickOnButton
]

function randomEvent(monkeysLeft){
    let typeIndex = getRandomInt(0, functions.length)
    if(monkeysLeft > 0){
        functions[typeIndex]()
        monkeysLeft = monkeysLeft - 1;
        cy.wait(1000)
        randomEvent(monkeysLeft);
    }
}

function randomClick() {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
            }
        });
}

function typeRandomString(){
    let type = 'input'

    cy.get(type).then($inputs => {
        var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
        if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type(generateRandomString(5));
        }
    });
}

function generateRandomString(length) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

function selectRandomCombo() {
    let type = 'select'

    cy.get(type, { timeout: 5000 }).then($selects => {
        if($selects > 0){
            var randomSelect = $selects.get(getRandomInt(0, $selects.length));
            if(!Cypress.dom.isHidden(randomSelect)) {
                cy.wrap(randomSelect).select(1);
            }
        }
    });
}

function randomClickOnButton() {
    cy.get('button').then($buttons => {
        var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
        if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
        }
    });
}