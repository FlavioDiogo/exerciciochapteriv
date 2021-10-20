/// <reference types="cypress" />

import articles from '../support/pages/articles'


describe('Cadastro de usuário', () => {
  it('Cadastrar com dados válidos', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 200,
      fixture: 'cadastro-com-sucesso'
    }).as('postUsers')
    cy.visit('register')
    articles.cadastrarUsuarioComSucesso()
    cy.contains('No articles are here... yet.').should('be.visible')
  })

  it('Usuário já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'usuario-existente'
    }).as('postUsers')
    cy.visit('register')
    articles.cadastrarUsuarioMesmoNome()
    cy.contains('username has already been taken').should('be.visible')
  })

  it('E-mail já existente', () => {
    cy.intercept({
      method: 'POST',
      path: '/api/users'
    }, {
      statusCode: 422,
      fixture: 'email-existente'
    }).as('postUsers')
    cy.visit('register')
    articles.cadastrarUsuarioMesmoEmail()
    cy.contains('email has already been taken').should('be.visible')
  })
})




