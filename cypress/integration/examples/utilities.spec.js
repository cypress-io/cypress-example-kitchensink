context('Utilities', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/utilities')
  })

  it('Cypress._.method() - call a lodash method', () => {
    // use the _.chain, _.map, _.take, and _.value functions
    // https://on.cypress.io/_
    cy.request('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        let ids = Cypress._.chain(response.body).map('id').take(3).value()

        expect(ids).to.deep.eq([1, 2, 3])
      })
  })

  it('Cypress.$(selector) - call a jQuery method', () => {
    // https://on.cypress.io/$
    let $li = Cypress.$('.utility-jquery li:first')

    cy.wrap($li)
      .should('not.have.class', 'active')
      .click()
      .should('have.class', 'active')
  })

  it('Cypress.moment() - format or parse dates using a moment method', () => {
    // use moment's format function
    // https://on.cypress.io/cypress-moment
    // eslint-disable-next-line no-unused-vars
    let time = Cypress.moment().utc('2014-04-25T19:38:53.196Z').format('h:mm A')

    cy.get('.utility-moment').contains('3:38 PM')
      .should('have.class', 'badge')
  })

  it('Cypress.Blob.method() - blob utilities and base64 string conversion', () => {
    cy.get('.utility-blob').then(($div) => // https://on.cypress.io/blob
    // https://github.com/nolanlawson/blob-util#imgSrcToDataURL
    // get the dataUrl string for the javascript-logo
      Cypress.Blob.imgSrcToDataURL('/assets/img/javascript-logo.png', undefined, 'anonymous')
      .then((dataUrl) => {
        // create an <img> element and set its src to the dataUrl
        let img = Cypress.$('<img />', { src: dataUrl })
        // need to explicitly return cy here since we are initially returning
        // the Cypress.Blob.imgSrcToDataURL promise to our test
        // append the image
        $div.append(img)

        cy.get('.utility-blob img').click()
        .should('have.attr', 'src', dataUrl)
      }))
  })

  it('new Cypress.Promise(function) - instantiate a bluebird promise', () => {
    // https://on.cypress.io/promise
    let waited = false

    function waitOneSecond () {
      // return a promise that resolves after 1 second
      // eslint-disable-next-line no-unused-vars
      return new Cypress.Promise((resolve, reject) => {
        setTimeout(() => {
          // set waited to true
          waited = true

          // resolve with 'foo' string
          resolve('foo')
        }, 1000)
      })
    }

    cy.then(() => // return a promise to cy.then() that
    // is awaited until it resolves
      waitOneSecond().then((str) => {
        expect(str).to.eq('foo')
        expect(waited).to.be.true
      }))
  })
})
