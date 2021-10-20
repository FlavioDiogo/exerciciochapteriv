/// <reference types="cypress" />

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
    cy.get('[placeholder=Username]').type('flaviochapteriv')
    cy.get('[placeholder=Email]').type('flaviochapteriv@teste.com.br')
    cy.get('[placeholder=Password]').type('12346')
    cy.get('button.btn-primary').click()
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
    cy.get('[placeholder=Username]').type('flaviochapteriv')
    cy.get('[placeholder=Email]').type('flaviochapteriv@teste.com.br')
    cy.get('[placeholder=Password]').type('12346')
    cy.get('button.btn-primary').click()
    cy.contains('username has already been taken').should('be.visible')
  })
})
