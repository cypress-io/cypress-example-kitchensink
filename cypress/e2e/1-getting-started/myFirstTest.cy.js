const navBarText = Cypress.env('navBarText');
const command = Cypress.env('commands')

context('My First Test',()=>{
  beforeEach(()=>{
    cy.visit('/')
  })

  it('It has an h1 on the page',() => {
    cy.get('h1').should('exist');
  })

  it('Renders the correct h1 text',()=>{
    cy.get('h1').should('contain.text','Kitchen Sink');
  })

  it('renders the paragraph under the the h1', ()=>{
    cy.get('.container').eq(1).find('p').should('exist')
  })

  it('renders a section with correct element', () =>{
    cy.get('.container').eq(2).within(()=>{
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    })
  })

  it('correctly renders the cypress website link', ()=>{
    cy.findByText(navBarText).should('exist')
    cy.get('.dropdown-toggle').should('contain.text','Commands');
  })
}) 