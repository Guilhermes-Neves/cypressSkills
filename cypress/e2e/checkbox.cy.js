describe('Checkbox', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('checkbox', 'Checkbox')
  })

  it('Deve marcar todas as opcoes', () => {
    const langs = ['javascript', 'python', 'rust', 'go', 'typescript']
    langs.forEach(op => {
      cy.get(`label[for=${op}]`)
        .click()
    })
  })

  it('Deve marcar as linguagens que utilizam o node js', () => {
    const langs = ['javascript', 'typescript']
    langs.forEach(op => {
      cy.get(`label[for=${op}]`)
        .click()
    })
  })
})