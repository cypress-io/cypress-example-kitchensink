/// <reference types= "cypress" />

describe('Tests on the traversal page',()=>{
    beforeEach(()=>{
        cy.visit('/commands/traversal')
    })

    context('Tests using children()',()=>{
        it('Getting the children of the DOM element',()=>{
            // cy.get('.traversal-breadcrumb').children('.active').should('contain','Data')
            cy.get('.traversal-breadcrumb')
                .children()
                .should('have.length','3')
                .and('contain','Home')
                .and('contain','Library')
                .and('contain','Data') 
                
            // cy.get('.traversal-breadcrumb')
            //     .children()
            //     .filter('li[href]')
            //     .its('length')
            //     .should('eq',2)
            //This didn't work, Needs investigation later
            })
    })

    context('Tests using contain()',()=>{
        it('Testing if the closest ul element has the stated class',()=>{
            cy.get('.traversal-badge')
            .closest('ul')
            .should('have.class','list-group')
        })

        it('Trial with the closest div',()=>{
            cy.get('.traversal-badge')
                .closest('div')
                .should('have.class','well')
        })

        it('Testing with the span element',()=>{
            cy.get('span')
                .closest('li')
                .should('have.class','list-group-item')
        })

        it('Testing on li element with the class"active"',()=>{
            cy.get('.traversal-breadcrumb > .active')
                .closest('ol')
                .should('have.class','traversal-breadcrumb')
        })

    })

    context('Tests to find the position using eq()',()=>{
        it('Getting a specific element',()=>{
            cy.get('.traversal-list > li')
                .eq(1)
                .should('contain','siamese')
        })

        it('Clicking the specific element',()=>{
            cy.get('.traversal-list > li')
                .eq('3')
                .should('contain','sphynx')
                .rightclick()
        })
    })

    context('Using filter() to find the elements',()=>{
        it('Matching a specific selector',()=>{
            cy.get('.traversal-nav>li').filter('.active').should('contain','About')
        })

        it('Confirming an item in the list',()=>{
            cy.get('.list-group>li>span').filter('.traversal-badge').should('contain.text','54')
            // cy.get('.list-group>li').filter('.traversal-badge').should('contain.html','Friends')
            cy.get('.traversal-breadcrumb>li').filter('.active').should('contain','Data')
        })
    })

    context('Using find() to find the elements',()=>{
        it('Getting the DOM elements of the selector',()=>{
            cy.get('.traversal-pagination').find('li').find('a').should('have.length','7')
        })

        it('Finding the elements',()=>{
            cy.get('.traversal-breadcrumb').find('li').find('a').eq(1).should('contain.text','Library')
            cy.get('.traversal-list').find('li').eq(2).contains('persian').should('have.css','box-sizing','border-box')
            cy.get('.traversal-table').find('th').should('have.length','3')
            })
    })

    context('Using the first() method',()=>{
        it('Getting the first DOM element',()=>{
            cy.get('.traversal-table td').first().should('contain','1')
            cy.get('.traversal-table tr').first().should('contain','#')
            cy.get('.traversal-breadcrumb').first().should('contain','Home')
        })

        it('Checking the tests by myself',()=>{
            cy.get('.traversal-list').first().should('contain','tabby');
            cy.get('.traversal-pagination').first().should('contain','«');
        })
    })

    context('Using the last() method to find the element',()=>{
        it('Finding the last DOM element',()=>{
            cy.get('.traversal-buttons').last().should('contain','Submit');
            cy.get('.traversal-buttons').first().should('contain','Link');
            cy.get('.traversal-nav>li').last().should('contain','Services');
            cy.get('.traversal-nav>li').eq(1).should('have.attr','class','active');
            cy.get('.traversal-breadcrumb>li').last().should('have.attr','class','active').and('contain.text','Data');
        });
    });

    context('Experimenting with next',()=>{
        it('Finding the next elements',()=>{
            cy.get('.traversal-list>li').contains('tabby').next().should('contain','siamese');
            // cy.get('.traversal-nav>li').contains('Home').next().should('contain','Services');//Fails as there is an a tag in between the li elements
            cy.get('.traversal-next-all').contains('apples').next().should('have.attr','class','second');
            cy.get('.traversal-next-all').contains('pineapples').next().should('contain','grapes');
            // cy.get('.traversal-next-all').first().should('contain','apples').next().should('contain','oranges').last().should('contain','grapes');
        });
    });

    context('Tests with nextAll()',()=>{
        it('Getting all of the next sibling DOM elements within elements',()=>{
            cy.get('.traversal-next-all').contains('orange').nextAll().should('have.length',3);
            cy.get('.traversal-ul').contains('apples').nextAll().should('have.length',2);
            cy.get('.traversal-list').contains('persian').nextAll().should('have.length',2);
            // cy.get('.traversal-pagination').contains('1').nextAll().should('have.length',4);// The element containing "1" does not have any sibling elements after it, so the test fails. 
        })
    })

    context('Testing with nextUntil()',()=>{
        it('To get all the elements until other elements',()=>{
            cy.get('#fruits').nextUntil('#nuts').should('have.length',7);
        })
    })

    context('Tests at the end',()=>{
        it('The remaining tests',()=>{
            cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain','Disabled');
            cy.get('.traversal-mark').parent().should('contain','Morbi');
            cy.get('.traversal-cite').parents().should('match','blockquote');
            cy.get('.clothes-nav').find('.active').parentsUntil('.clothes-nav').should('have.length',2);
            cy.get('.birds').find('.active').prev().should('contain','Lorikeets');
            cy.get('.fruits-list').find('.third').prevAll().should('have.length',2);
            cy.get('.foods-list').find('#nuts').prevUntil('#veggies').should('have.length',3);
            cy.get('.traversal-pills .active').siblings().should('have.length',2);
        
        })
    })
    
})