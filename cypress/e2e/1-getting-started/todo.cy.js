

describe('Adding item in the shopping cart', () => {
  beforeEach(() => {
    cy.visit('https://shop.demoqa.com/')
  })

  it('Adding mini dress to the shopping cart', () => {

    
    cy.contains('.noo-search').click()
    cy.get('input[type=search]').type('mini dress').type('{enter}')


  })
  
})
