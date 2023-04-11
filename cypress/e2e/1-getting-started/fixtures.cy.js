///<reference types="Cypress"/>

describe('The fixtures',()=>{

    beforeEach(()=>{
        cy.fixture('example2').then(function(data){
            this.data = data;
            cy.log('THIS: ',this.data)
        })
    })

    it('Using the fixture data in a Network request',function(){
        cy.visit('/commands/network-requests')
        cy.intercept('GET','**/comments/*',this.data).as('getComment')
        cy.get('.network-btn').click()
        cy.wait('@getComment').then((res)=>{
            cy.log('Response: ',res)
        })
    })

    it('Pulls data from a fixture',()=>{
        cy.fixture('example').then((data)=>{
            cy.log('DATA: ',data)
        })
    })

    it('Updated fixtures data  inline',()=>{
        cy.fixture('example').then((data)=>{
            data.email="updated@email.com"
            cy.log('UPDATED: ',data)
        })
    })
    
})

