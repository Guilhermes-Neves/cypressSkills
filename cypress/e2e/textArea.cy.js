describe('Text area', () => {

  beforeEach(() => {
    cy.goHome()
    cy.doLogin()
  })

  it('Deve preencher o com sucesso', () => {
    cy.goTo('textarea', 'Textarea')

    const largeText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    cy.get('textarea[name=message]')
      .invoke('val', largeText)
      .type('{enter}')
  })
})