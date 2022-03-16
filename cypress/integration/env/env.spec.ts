describe('Env', () => {
  it('should inject custom env from cypress.json file', () => {
    expect(Cypress.env('HELLO_FROM_ENV_FILE')).to.equal('Hello from Cypress Env file!!!')
  })
})
