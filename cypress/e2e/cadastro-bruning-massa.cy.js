import data from '../fixtures/usuariosbru.json'
const usuariosbru = data.usuarios

describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://app.bruningsistemas.com.br/login')
        cy.login('admin', 'maria', 'implantacao123')
        cy.visit('https://app.bruningsistemas.com.br/clientes/gerenciar-clientes/pesquisa')
        cy.get('button.btn.btn-success')
            .should('exist').should('be.enabled').contains('Novo').click()
        cy.get('.button-group > :nth-child(2)').click()
            .should('exist').should('be.enabled').contains('Pessoa física').click()
    })

    usuariosbru.forEach(usuario => {
        it(`Deve cadastrar o usuário ${usuario.nome}`, () => {
            cy.get('input[name="descricao"]').first().type(usuario.nome)
            cy.get('input[name="email"]').type(usuario.email)
            cy.get('input[name="celular"]').type(usuario.celular)
            cy.get('input[name="cep"]').type(usuario.cep)
            cy.get('input[name="numero"]').type(usuario.numero)

            cy.get('.left > .btn-primary')
                .should('exist').should('be.enabled').contains('Salvar')
                .click()
        })
    })
})
