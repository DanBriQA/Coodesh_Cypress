

it('webapp deve estar online', function(){
    // um simples comentário
    cy.visit('/')

    cy.title()
        .should('eq', 'Perfil grátis de desenvolvedor e acesso as vagas | Coodesh')
})
