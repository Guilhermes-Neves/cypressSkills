describe('Datepicker', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('date-picker', 'Date Picker')
  })

  it('Deve selecionar minha data de aniversário', () => {
    cy.get('input[placeholder="Escolha uma data"][readonly]')
      .click()

    cy.get('select[aria-label="Month"]')
      .select('Abril')

    cy.get('input[aria-label="Year"]')
      .type('1996')

    cy.get('span[aria-label="Abril 9, 1996"]')
      .click()
  })
})