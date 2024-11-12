describe('Input fields', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
  })

  it('Deve preencher o campo texto', () => {
    cy.goTo('input-fields', 'Input Fields')

    cy.get('[data-cy="fullname"]')
      .type('Guilherme Neves')

    cy.get('[data-cy="email"]')
      .type('guilherme@gmail.com')

    cy.get('[data-cy="number"]')
      .type('28')

    cy.get('[data-cy="date"]')
      .type('2024-10-10')
  })
})