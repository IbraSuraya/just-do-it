// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('resetUsers', () => {
  cy.request('DELETE', '/auth/reset')
})

// Error validation : EndPoint Register
Cypress.Commands.add('badRequest400', (response, messages = []) => {
  expect(response.status).to.eq(400)
  expect(response.duration).to.be.lessThan(100)
  expect(response.body.error).to.eq('Bad Request')
  messages.forEach((message) => {
    expect(message).to.be.oneOf(response.body.message)
  })
})

Cypress.Commands.add("unauthorized401", (response) => {
  expect(response.status).to.eq(401)
  expect(response.duration).to.be.lessThan(100)
  expect(response.body.message).to.eq('Unauthorized')
})