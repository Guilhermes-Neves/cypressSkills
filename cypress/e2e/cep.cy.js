describe('CEP', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
    cy.goTo('cep', 'CEP (API dos Correios)')
  })

  it('Deve cadastrar um endereço consumindo a API dos correios', () => {

    const address = {
      cep: '28605727',
      logradouro: 'Rua José Barroso',
      localidade: 'Nova Friburgo',
      uf: 'RJ'
    }

    cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
      statusCode: 200,
      body: address
    }).as('getCep')


    const myTimeout = 7000
    cy.get('#cep').type(address.cep)
    cy.contains('button', 'Cadastrar').click()
    cy.wait('@getCep')
    cy.get('#logradouro', {timeout: myTimeout})
      .should('have.value', address.logradouro)
    cy.get('#cidade', {timeout: myTimeout})
      .should('have.value', address.localidade)
    cy.get('#estado', {timeout: myTimeout})
      .should('have.value', address.uf)
  })
})