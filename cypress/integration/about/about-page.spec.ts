describe('About Page', () => {
  it('should open about page when user clicks about navigation item', () => {
    cy.visit('/')

    cy.findByRole('link', { name: /about/i }).click()

    cy.findByRole('heading', { name: /about page/i }).should('exist')
  })

  it('should display title when user use direct path (/about)', () => {
    cy.visit('/about')
    cy.findByRole('heading', { name: /about page/i }).should('exist')
  })
})
