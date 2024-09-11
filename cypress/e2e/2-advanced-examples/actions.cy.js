/// <reference types="cypress" />

context('Actions', () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:8080/commands/donkey')
  // })

  // // eslint-disable-next-line
  // it('works', () => {
  //   cy.get('#outer').should('contain', 'Outer')
  //   // cy.get('#outer').should('contain', 'Inner')
  // })

  // // eslint-disable-next-line
  // it('does not work', () => {
  //   cy.get('#outer').should('contain', 'Outer2')
  //   // cy.get('#outer').should('contain', 'Inner2')
  // })

  // // eslint-disable-next-line
  // it('talks to an iframe', () => {
  //   cy.get('#example-tier-1')
  //     .its('0.contentDocument.body')
  //     .should('contain', "I'm Tier 1 - h3")
  // })

  // it('talks to the waffles', () => {
  //   cy.visit('http://localhost:8080/commands/donkey-content')

  //   cy.get('#example-tier-1')
  //     .its('0.contentDocument.body')
  //     .should('contain', "I'm Tier 1 - h3")
  // })

  describe(`100% scores`, () => {
    // it("github", () => {
    //   cy.visit("https://github.com");
    //   cy.contains("GitHub");
    // });

    it("deque university", () => {
      cy.visit("https://dequeuniversity.com/");
      cy.contains("Deque University");
    });

    it("userway", () => {
      cy.visit("https://userway.org/accessibility/");
      cy.contains("Accessibility Statement");
    });
  });

  // beforeEach(() => {
  //   cy.viewport(600, 500)
  //   cy.visit('http://localhost:8080/commands/donkey')
  // })

  // // eslint-disable-next-line
  // it('works', () => {
  //   for (let index = 0; index < 10; index++) {
  //     cy.get(`#a-${index}`).click()
  //   }
  // })

  // // eslint-disable-next-line
  // it('does not work', () => {
  //   cy.visit('http://localhost:8080/commands/garbage')
  //   cy.get('#outer').should('contain', 'Outer2')
  //   // cy.get('#outer').should('contain', 'Inner2')
  // })

  // // eslint-disable-next-line
  // it('talks to an iframe', () => {
  //   cy.get('#example-tier-1')
  //     .its('0.contentDocument.body')
  //     .should('contain', "I'm Tier 1 - h3")
  // })

  // it('talks to the waffles', () => {
  //   cy.visit('http://localhost:8080/commands/donkey-content')

  //   cy.get('#example-tier-1')
  //     .its('0.contentDocument.body')
  //     .should('contain', "I'm Tier 1 - h3")
  // })
})
