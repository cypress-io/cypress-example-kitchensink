import { source } from 'common-tags'

export default {
  Location: {
    'cy.hash() - get the current URL hash': {
      test: source`
        // https://on.cypress.io/hash
        cy.hash().should('be.empty')
      `,
    },
  },
}
