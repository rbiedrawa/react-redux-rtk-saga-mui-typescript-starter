describe('i18n - feature', () => {
  it('should change theme to dark mode', () => {
    cy.visit('/')

    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')

    cy.findByTestId('Brightness4Icon').click()

    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)')
  })

  it('should change back theme to light mode', () => {
    cy.visit('/')

    cy.findByTestId('Brightness4Icon').click()

    cy.get('body').should('have.css', 'background-color', 'rgb(18, 18, 18)')

    cy.findByTestId('Brightness7Icon').click()

    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)')
  })
})
