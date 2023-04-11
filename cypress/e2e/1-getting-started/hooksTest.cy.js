///<reference types="Cypress"/>
describe('The hooks test',() =>{
    context('1.The Beginning',()=>{
        before(() =>{
            cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length',10)
        })

        beforeEach(()=>{
            cy.visit('/')
        })

        afterEach(()=>{
            cy.log('After each hook is here')
        })

        after(()=>{
            cy.log('The final after hook runs once')
        })

        it('Has an h1 on the page',()=>{
            cy.get('h1').should('exist')
        })

        it('Renders the correct h1 text',()=>{
            cy.get('h1').should('contain.text','Kitchen Sink')
        })
    })

    context('2.Self written',()=>{
        beforeEach(()=>{
            cy.visit('/')
        })

        it('Checking the commands text',()=>{
            cy.get(':nth-child(3) > .container > .row > #utilities > h2').should('contain.text','Commands')
            cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
                .should('contain.text','Querying')
            cy.get('.home-list').contains('get').should('exist')
            cy.get('.home-list').contains('david').should('not.exist')
        })
    })
})