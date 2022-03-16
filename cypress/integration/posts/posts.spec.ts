describe('Feature - Posts', () => {
  it('should add new post', () => {
    cy.visit('/')

    cy.findByRole('textbox', { name: /title/i }).type('Hello from Cypress!')
    cy.findByRole('textbox', { name: /body/i }).type('This is our first Cypress test😊')

    cy.findByRole('button', { name: /add new post/i }).click()

    cy.findByRole('heading', { name: /hello from cypress!/i }).should('exist')
  })
})
