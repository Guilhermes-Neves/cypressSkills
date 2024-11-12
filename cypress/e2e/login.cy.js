describe('Login', () => {
  beforeEach(() => {
    cy.goHome()
  })

  it('Deve logar com sucesso', () => {
    const user = {
      email: 'papito@cyskills.com.br',
      password: 'showtime'
    }

    cy.login(user)
    cy.userLoggedIn()
  })

  it('Nao deve logar com senha inválida', () => {
    const user = {
      email: 'papito@cyskills.com.br',
      password: 'senhainvalida'
    }
    cy.login(user)
    cy.validateErrorMessage('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Nao deve logar com email nao cadastrado', () => {
    const user = {
      email: '404@cyskills.com.br',
      password: 'senhainvalida'
    }
    cy.login(user)
    cy.validateErrorMessage('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Nao deve logar email inválido', () => {
    const user = {
      email: 'www.cyskills.com',
      password: 'senhainvalida'
    }
    cy.login(user)

    cy.validateErrorMessage('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })

  it('Nao deve logar sem o email', () => {
    const user = {
      email: null,
      password: 'showtime'
    }
    cy.login(user)

    cy.validateErrorMessage('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Nao deve logar sem senha', () => {
    const user = {
      email: 'papito@cyskills.com.br',
      password: ''
    }
    cy.login(user)

    cy.validateErrorMessage('Por favor, digite sua senha para continuar.')
  })

  it('Nao deve logar sem o email e sem a senha', () => {
    const user = {
      email: '',
      password: ''
    }
    cy.login(user)

    cy.validateErrorMessage('Parece que você esqueceu de informar seu e-mail.')
  })
})