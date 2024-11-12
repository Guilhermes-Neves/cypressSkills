describe('Tags', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
  })

  it('Deve adicionar algumas tags', () => {
    cy.goTo('tags', 'Tags')

    const tags = ['Cypress', 'Javascript', 'Nodejs']

    tags.forEach(t => {
      cy.get('[data-testid="new-tag-input"]')
        .type(t + '{enter}')
        .should('have.value', '')
      cy.wait(500)
    })


    tags.forEach(t => {
      cy.get('.tag-input')
        .should('contain', t)
    })
  })
})