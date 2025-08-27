describe('Página de Login', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/')
    cy.get('[data-test="register-button"]').click()
  })
  it('Deve preencher os dados de login e autenticar o longin', () => {
    cy.cadastro('caio', 'caio@teste.com', 'Caio1234','Caio1234');
  })
})