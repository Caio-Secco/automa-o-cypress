describe('Página de Login', () => {
    beforeEach(() => {
        cy.visit('https://app.bruningsistemas.com.br/login')
    })
    it('Deve preencher os dados de login e acusar erro de informações', () => {
        cy.login('admin', 'maria', 'implantacao12')
        cy.contains('Suas informações de autenticação estão incorretas.').should('be.visible')
    })

    it('Deve informar os dados e informar erro ao não preencher conta', () => {
        cy.login2('maria', 'implantacao12')
        cy.contains('Este campo é obrigatório.').should('be.visible')
    })
})