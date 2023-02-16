it('works 1', { retries: 3 }, () => {
  const attempt = cy.state('runnable')._currentRetry

  expect(attempt).to.eq(3)
})

it('works 2', () => {
  cy.wait(4000)
  expect(true).to.eq(true)
})

it('works 3', () => {
  cy.wait(5000)
  expect(true).to.eq(true)
})

it('works 4', () => {
  cy.wait(6000)
  expect(true).to.eq(true)
})
