describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://app.bruningsistemas.com.br/login')
  })
  it('Deve preencher os dados de login e autenticar o longin', () => {
    
    cy.login('admin', 'maria', 'implantacao123')
  
  })
})