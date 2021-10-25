const nomeArtigo = 'Artigo de testes2' + new Date().getTime()
const el = require ('./elements').elementsPreencherArtigo
const ele = require ('./elements').elementsCadastrarUsuarioSucesso
const elem = require ('./elements').elementsCadastrarUsuarioMesmoNome
const eleme = require ('./elements').elementsCadastrarUsuarioMesmoEmail
const element = require ('./elements').elementsCadastrarUsuarioSemSenha
 
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
    
    cadastrarUsuarioComSucesso(){
        cy.get(ele.nomeUsuario).type('flaviochapteriv2')
        cy.get(ele.emailUsuario).type('flaviochapteriv2@teste.com.br')
        cy.get(ele.senhaUsuario).type('12346')
        cy.get(ele.fimUsuario).click()
    }

    cadastrarUsuarioMesmoNome(){
        cy.get(elem.nomeUsuario).type('flaviochapteriv2')
        cy.get(elem.emailUsuario).type('flaviochapteriv2@teste.com.br')
        cy.get(elem.senhaUsuario).type('12346')
        cy.get(elem.fimUsuario).click() 
    }   

    cadastrarUsuarioMesmoEmail(){
        cy.get(eleme.nomeUsuario).type('flaviochapteriv3')
        cy.get(eleme.emailUsuario).type('flaviochapteriv2@teste.com.br')
        cy.get(eleme.senhaUsuario).type('12346')
        cy.get(eleme.fimUsuario).click() 
    } 

    cadastrarUsuarioSemSenha(){
        cy.get(element.nomeUsuario).type('flaviochapteriv4')
        cy.get(element.emailUsuario).type('flaviochapteriv4@teste.com.br')
        //cy.get(element.senhaUsuario).type('')
        cy.get(element.fimUsuario).click() 
    } 
}        

export default new articles()