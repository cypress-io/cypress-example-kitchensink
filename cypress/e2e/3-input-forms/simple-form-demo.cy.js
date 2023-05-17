/// <reference types="cypress" />

context('Simple Form Demo', () => {  
  beforeEach(() => {
    cy.setCookie('exit_popup_dismissed', 'closed');
    cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo');
  });

  it('Single Input Field', () => {
    const text = 'Test message.';
    cy.get('#user-message').type(text);
    cy.get('#showInput').click();
    cy.get('#message').should('contain', text);
  })

  it('Two Input Fields', () => {
    const enterA = 3;
    const enterB = 4;
    const sum = enterA + enterB;
    cy.get('#sum1').type(enterA);
    cy.get('#sum2').type(enterB);
    cy.get('#gettotal > button').click();
    cy.get('#addmessage').should('contain', sum);
  })
})
