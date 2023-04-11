///<reference types="Cypress"/>

const token = 'abcd123'

describe('Using custom commands',()=>{
  context('Examples',()=>{
    beforeEach(()=>{
      cy.fixture('example').then(function(data){
        this.data = data
        cy.log('THIS : ' ,data)
      })
    })

    // it('Sets a token in local storage',()=>{
    //     cy.setLocalStorage('token',token)
    // })

    //The above test should not be separated as it fails if it is not together
    //while setting and getting the token from the local  storage


    it('Sets and Gets a token from local storage',()=>{
      cy.setLocalStorage('token',token)
      cy.getLocalStorage('token').should('eq',token)
    })

    it('Overwrites the type commands by using sensitive characters',()=>{
      cy.visit('/commands/actions')
      cy.findByPlaceholderText('Email').type('test@email.com');
      cy.findByPlaceholderText('Email').type('test@email.com',{sensitive:true});
    })

  })
})