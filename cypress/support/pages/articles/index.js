const nomeArtigo = 'Artigo de testes2' + new Date().getTime()
const el = require ('./elements').elements
 
class articles {
    acessarFormulario(){
        cy.contains('a', 'New Article').click()
        cy.url().should('contain', 'editor')
    }

    preencherFormulario(){
        
        cy.get(el.nomeArtigo).type(nomeArtigo)
        cy.get(el.descricaoArtigo).type('Artigo de testes')
        cy.get(el.corpoArtigo).type('Artigo de testes')
        cy.get(el.tagArtigo).type('Artigo de testes')

    }
    publicarformulario(){
        cy.contains('button', 'Publish Article').click()
        cy.contains('button', 'Post Comment').should('exist')
    }    
}        

export default new articles()