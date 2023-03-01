describe('baseline functionality', () => {
  it('has a passing test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })

  it('has a failing test', () => {
    cy.wait(500)
    expect(true).to.eq(false)
  })

  // TODO: skipping for a reason
  it.skip('has a skipped test', () => {
    cy.wait(500)
    expect(true).to.eq(true)
  })

  it('has a flaky test', { retries: 3 }, () => {
    const attempt = cy.state('runnable')._currentRetry

    expect(attempt).to.eq(3)
  })
})
