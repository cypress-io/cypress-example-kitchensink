// const { data } = require("cypress/types/jquery");

const navBarText = Cypress.env('navBarText');

context('Second Test',()=>{
  it('types into an email field',() =>{
    cy.visit('/commands/actions')
    cy.findByPlaceholderText('Email').type('test@email.com',{delay:200})//Delaying the typing speed
    cy.should('have.value','test@email.com')
          .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
          .type('{backspace}{selectall}')
    cy.get('.action-disabled')
          .type('disabled error checking', { force: true })
          .should('have.value', 'disabled error checking') 
    cy.log('Cypress log used') 
    cy.wait(2000).then(()=>{
      // console.log('test is finished')
      fetch('https://api.spacexdata.com/v3/missions')
            .then((res)=>res.json())
            .then((data) => {
              console.log(data)
            })
    });

  })
})

