/// <reference types="cypress" />

describe('Tests on Actions page',()=>{
    beforeEach(()=>{
        cy.visit('/commands/actions')
    });

    context('Using the type command',()=>{
        it('Typing out the letters',()=>{
            cy.get('.action-email').type('fake@email.com').should('have.value','fake@email.com')
        })
    })
})
