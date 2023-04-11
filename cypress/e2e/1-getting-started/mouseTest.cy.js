///<reference types="Cypress"/>

describe('Mouse based Tests',()=>{
  beforeEach(()=>{
    cy.visit('/commands/actions')
  })

  it('It triggers a popover on click',()=>{
    cy.get('.action-btn').click()
    cy.findByText('This popover shows up on click').should('be.visible')
  })

  it('Click on different section of canvas',()=>{
    cy.get('#action-canvas').click('top');
    cy.get('#action-canvas').click('topLeft');
    cy.get('#action-canvas').click('right');
    cy.get('#action-canvas').click(90,120);
  })

  it('Using double click to edit',()=>{
    cy.get('.action-div').dblclick().should('not.be.visible')
    cy.get('.action-input-hidden').should('be.visible').clear().type('Your Momma')
  })

  it('Using right click to edit',()=>{
    cy.get('.rightclick-action-div').rightclick().should('not.be.visible')
    cy.get('.rightclick-action-input-hidden').should('be.visible').clear().type('This is real testing')
  })

  it('Showing the navlinks on hover',()=>{
    cy.get('.dropdown-toggle').trigger('mouseover')
    cy.get('.dropdown-menu')
      .should('have.css', 'display', 'block','be.visible')
      .find('a')
      .eq(6)
      .click({force:true})//Needs to be done as the display is set to none
    cy.location('pathname').should('eq','/commands/navigation')
    cy.get('h1').should('exist').contains('Navigation')//Made this to purposely fail
  })
})