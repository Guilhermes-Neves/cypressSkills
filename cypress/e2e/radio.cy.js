describe('Radio Buttons', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
  })

  it('Deve marcar o framework utilizado no curso', () => {
    cy.goTo('radio', 'Radio Buttons')

    cy.contains('label', 'Cypress')
      .click()
  })
})