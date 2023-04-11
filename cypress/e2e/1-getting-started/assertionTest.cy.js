// context('Shows an active class for the current page',()=>{
//     it('The active Class',() =>{
//         cy.visit('/commands/actions')
//         cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
//     })

//     it('Should not have an active class on inactive pages',()=>{
//         cy.visit('/commands/actions');
//         cy.get('.dropdown-menu').find('li').first().should('not.have.class','active').find('a').should('have.attr','href','/commands/querying')
//     })
// })

context('Checking the pages exists',()=>{
  it('The query page',()=>{
    cy.visit('/commands/querying')
    cy.get('.dropdown-menu').find('li').eq(0).should('have.class','active')
  })

  it('The traversal page',()=>{
    cy.visit('/commands/traversal')
    cy.get('.dropdown-menu').find('li').eq(1).should('have.class','active')
  })

  it('The actions page',()=>{
    cy.visit('/commands/actions')
    cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
  })

  it('The window page',()=>{
    cy.visit('/commands/window')
    cy.get('.dropdown-menu').find('li').eq(3).should('have.class','active')
  })
})

context('Eaxmple of negative assertion',()=>{
  it('To check the dropdown menu with the first item with the "active" class inactive',()=>{
    cy.visit('/commands/waiting')
    cy.get('.dropdown-menu')
            .find('li')
            .first()
            .should('not.have.class','active')
            .find('a')
            .should('have.attr','href','/commands/querying')
  })
})