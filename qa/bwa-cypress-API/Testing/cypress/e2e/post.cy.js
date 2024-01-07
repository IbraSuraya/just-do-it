describe('Post module', () => {
  const nPost = 15
  // const randomId = Cypress._.random(16, 50)

  before('login with Jhon Account', () => {
    cy.loginJohn()
  })

  before('generate posts data', () => cy.generatePostsData(nPost))

  context('EP-1 Create post', () => {
    // 1 - return unauthorized when not send token
    // 2 - return error validation messages when body not as requested
    // 3 + return correct post

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('POST', '/posts')
    })

    // CASE 2
    it('C-2 should return error validation message', () => {
      cy.request({
        method: 'POST',
        url: '/posts',
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
        failOnStatusCode: false,
      }).then((response) => {
        cy.badRequest400(response, [
          'title must be a string',
          'content must be a string',
        ])
      })
    })

    // CASE 3
    it('C-3 should return correct post', () => {
      cy.fixture('data_posts').then((data) => {
        cy.request({
          method: 'POST',
          url: '/posts',
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
          },
          body: {
            title: data[0].title,
            content: data[0].content,
          },
        }).then((response) => {
          const { success, data: { id, user_id, title, content, comments },} = response.body
          expect(response.status).to.eq(201)
          expect(success).to.be.true
          expect(id).not.to.be.undefined
          expect(user_id).not.to.be.undefined
          expect(title).to.eq(data[0].title)
          expect(content).to.eq(data[0].content)
          expect(comments.length).to.eq(0)
        })
      })
    })
  })
})