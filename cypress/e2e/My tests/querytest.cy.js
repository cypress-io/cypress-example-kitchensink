/// <reference types= "cypress" />

describe('Tests on query page',()=>{
    beforeEach(()=>{
        cy.visit('/commands/querying')
    })

    context('The tests for cy.get()',()=>{
        it('Verifying the Buttons  on the page',()=>{
            cy.get('#query-btn').should('contain','Button')//Using Id
            cy.get('.query-btn').should('contain','Button')//Using Class
            cy.get('#querying .well>button:first').should('contain','Button')//Using jQuery Here
           
        })
    
        it('Finding elements by data attribute',()=>{
            cy.get('[data-test-id="test-example"]').should('have.class','example').contains('Div with')
            cy.get('[data-test-id="test-example"]').should('contain.html','code').contains('data-test-id')
        })
    
        it('Getting the attribute of the element',()=>{
            cy.get('[data-test-id="test-example"]')
                .invoke('attr','data-test-id')
                .should('equal','test-example')
            cy.get('[data-test-id="test-example"]')
                .invoke('css','color')
                .should('equal','rgb(51, 51, 51)')//Checks the css color is correct or not
        })

        it('Chaining all the assertions',()=>{
            cy.get('[data-test-id="test-example"]')
                .should('have.attr','class','example')
                .and('have.css','font-size','14px')
        })
    })

    context('The tests for cy.contain()',()=>{
        it('Finding the items in the query list',()=>{
            cy.get('.query-list').contains('more apples').should('have.class','fourth')
            cy.get('ul').contains('apples').should('have.css','display','list-item')
            cy.get('.query-button span').contains('Save Form').should('have.css','font-weight','400')
        })
    })

    context('The tests for cy.within()',()=>{
        it('Finding the items within the specific DOM element',()=>{
            cy.get('.well').eq(3).within(()=>{
                cy.get('#inputName').should('have.attr','placeholder','Name');
                })
        })

        // it('The sample from the site',()=>{
        //     cy.get('.query-form').within(()=>{
        //         cy.get('input:first').should('have.attr','placeholder','Email')
        //         cy.get('input:last').should('have.attr','placeholder','Password')
        //     })
        // })
    })

    context('The tests for the cy,root()',()=>{
        it('The tests for the cy.root()',()=>{
            cy.root().should('match','html')
            cy.get('.well').eq(3).within(()=>{
                cy.get('#inputName').should('exist').should('have.attr','placeholder','Name')
            })
        })

        it('Setting the UL as the root element',()=>{
            cy.get('.query-ul').within(()=>{
                cy.root().should('have.class','query-ul')
                cy.get('li').first().should('exist').contains('One')
                cy.get('li:nth-child(3)').should('contain.text','Buckle my shoe').and('have.css','font-size','14px')
            })
        })

        it('Checking the root',()=>{
            cy.get('.query-ul').within(()=>(
                cy.root()
            ))
        })
    })

    context('Best Practices',()=>{
        it('Cicking the submit button',()=>{
            cy.get('[data-cy="submit"]').click()
        })
    })

})