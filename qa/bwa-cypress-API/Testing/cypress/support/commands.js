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

// Endpoint Register
Cypress.Commands.add('resetUsers', () => {
  cy.request('DELETE', '/auth/reset').then((response) => {
    expect(response.body.success).to.be.true
    expect(response.body.message).to.eq("Reset users successfully")
  })
})

// Error validation : EndPoint Register
Cypress.Commands.add('badRequest400', (response, messages = []) => {
  expect(response.status).to.eq(400)
  expect(response.duration).to.be.lessThan(200)
  expect(response.body.error).to.eq('Bad Request')
  messages.forEach((message) => {
    expect(message).to.be.oneOf(response.body.message)
  })
})

// EndPoint Login
Cypress.Commands.add("unauthorized401", (response) => {
  expect(response.status).to.eq(401)
  expect(response.duration).to.be.lessThan(200)
  expect(response.body.message).to.eq('Unauthorized')
})

// EndPoint Me
Cypress.Commands.add('checkUnauthorized', (method, url) => {
  cy.request({
    method,
    url,
    headers: {
      authorization: null,
    },
    failOnStatusCode: false,
  }).then((response) => {
    cy.unauthorized401(response)
  })
})

// Endpoint Me
Cypress.Commands.add('loginJohn', () => {
  const userData = {
    name: 'John Doe',
    email: 'john@nest.test',
    password: 'Secret_123',
  }

  cy.resetUsers()
  cy.request({
    method: 'POST',
    url: '/auth/register',
    body: userData,
  })
  
  cy.request({
    method: 'POST',
    url: '/auth/login',
    body: {
      email: userData.email,
      password: userData.password,
    },
  }).then((response) => {
    // Accses data token ke var global 'token'
    Cypress.env('token', response.body.data.access_token)
  })
})

// Endpoint Post-Create
Cypress.Commands.add('generatePostsData', (count) => {
  const { faker } = require('@faker-js/faker')

  cy.writeFile(
    'cypress/fixtures/data_posts.json',
    // lodash seperti forEach
    Cypress._.times(count, () => {
      const titleLength = Cypress._.random(1,3)
      return {
        title: faker.lorem.words(titleLength),
        content: faker.lorem.paragraph(),
      }
    }),
  )
})

// Endpoint Post-getAll
Cypress.Commands.add('createPosts', (data = []) => {
  cy.loginJohn()    // because need token in reset and create

  // reset post sebelumnya
  cy.request({
    method: 'DELETE',
    url: '/posts/reset',
    headers: {
      authorization: `Bearer ${Cypress.env('token')}`,
    },
  }).then((response) => {
    expect(response.body.success).to.be.true
    expect(response.body.message).to.eq("Reset posts successfully")
  })

  // create posts
  data.forEach((_post) => {
    cy.request({
      method: 'POST',
      url: '/posts',
      headers: {
        authorization: `Bearer ${Cypress.env('token')}`,
      },
      body: _post,
    })
  })
})

// EndPoint Post-getPostbyID
Cypress.Commands.add('notFound404', (response) => {
  expect(response.status).to.eq(404)
  expect(response.body.success).to.be.false
  expect(response.body.data).to.be.null
  expect(response.body.message).to.eq("Post not found")
})

// EndPoint Create Comment
Cypress.Commands.add('generateCommentsData', (count) => {
  const { faker } = require('@faker-js/faker')
  const maxNumber = 3

  cy.request({
    method: 'DELETE',
    url: '/comments/reset',
    headers: {
      authorization: `Bearer ${Cypress.env('token')}`,
    },
  }).then((response) => {
    expect(response.status).to.be.ok
    expect(response.duration).to.be.lessThan(200)
    expect(response.body.message).to.eq("Reset comments successfully")
    expect(response.body.success).to.be.true
  })

  cy.generatePostsData(maxNumber)
  cy.fixture('data_posts').then((data) => cy.createPosts(data))

  cy.writeFile(
    'cypress/fixtures/data_comments.json',
    Cypress._.times(count, () => {
      return {
        post_id: faker.datatype.number({ min: 1, max: maxNumber }),
        content: faker.lorem.words(5),
      }
    }),
  )
})