describe('Comment module', () => {
  const randomId = Cypress._.random(100, 1000)
  const deletedId = Cypress._.random(1, 5)

  before('login with Jhon Account', () => {
    cy.loginJohn()
  })

  context('EP-1 Create comment', () => {
    // 1. - return unauthorized
    // 2. - return error validation
    // 3. + return correct comments
    // 4. + found in get post by id endpoint
    // 5. + found in all posts endpoint

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('POST', '/comments')
    })

    // CASE 2
    it('C-2 should return error validation messages', () => {
      cy.request({
        method: 'POST',
        url: '/comments',
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
        failOnStatusCode: false,
      }).then((response) => {
        cy.badRequest400(response, [
          "post_id should not be empty",
          'post_id must be a number conforming to the specified constraints',
          "content should not be empty",
          'content must be a string',
        ])
      })
    })

    // CASE 3
    it('C-3 should return correct comments', () => {
      cy.generateCommentsData(5)

      cy.fixture('data_comments').then((data) => {
        data.forEach((_comment) => {
          cy.request({
            method: 'POST',
            url: '/comments',
            headers: {
              authorization: `Bearer ${Cypress.env('token')}`,
            },
            body: _comment,
          }).then((response) => {
            const { success, message,  data: { post_id, content } } = response.body
            expect(response.status).to.eq(201)
            expect(success).to.be.true
            expect(message).to.eq("Comment created successfully")
            expect(post_id).to.eq(_comment.post_id)
            expect(content).to.eq(_comment.content)
          })
        })
      })
    })
    
    // CASE 4
    it('C-4 should be found in get post by id endpoint', () => {
      cy.fixture('data_comments').then((data) => {
        data.forEach((_nData) => {
          cy.request({
            method: 'GET',
            url: `/posts/${_nData.post_id}`,
            headers: {
              authorization: `Bearer ${Cypress.env('token')}`,
            },
          }).then((response) => {
            const { message, success, data:{comments} } = response.body
            const isFound = comments.some((comment) => comment.content === _nData.content)
            expect(message).to.eq("Get a post")
            expect(success).to.be.true
            expect(comments).to.be.ok
            expect(isFound).to.be.true
          })
        })
      })
    })

    // CASE 5
    it('C-5 should be found in get all posts endpoint', () => {
      cy.request({
        method: 'GET',
        url: '/posts',
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
      }).then((response) => {
        cy.fixture('data_comments').then((_data) => {
          const posts = response.body.data
          _data.forEach((comment) => {
            const isFound = posts.find(
              (post) => post.id === comment.post_id).comments.some(
                (_comment) => _comment.content === comment.content)

            expect(isFound).to.be.true
          })
        })
      })
    })
  })

  context('EP-2 Delete comment', () => {
    // 1. - return unauthorized
    // 2. - return not found
    // 3. + successfully deleted
    // 4. - not found in detail post endpoint

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('DELETE', `/comments/${randomId}`)
    })

    // CASE 2
    it('C-2 should return not found', () => {
      cy.request({
        method: 'DELETE',
        url: `/comments/${randomId}`,
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404)
        expect(response.body.data).to.be.null
        expect(response.body.message).to.eq("Comment not found")
        expect(response.body.success).to.be.false
      })
    })

    // CASE 3
    it('C-3 should successfully delete comment', () => {
      cy.request({
        method: 'DELETE',
        url: `/comments/${deletedId}`,
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
      }).then((response) => {
        const { message, success } = response.body
        expect(response.status).to.eq(200)
        expect(message).to.eq('Comment deleted successfully')
        expect(success).to.be.true
      })
    })

    // CASE 4
    it('C-4 should not be found in detail post endpoint', () => {
      cy.fixture('data_comments').then((_data) => {
        const deletedComment = _data[deletedId - 1]

        cy.request({
          method: 'GET',
          url: `/posts/${deletedComment.post_id}`,
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
          },
        }).then((response) => {
          const { comments } = response.body.data
          const isFound = comments.some(
            (comment) => comment.id === deletedId && comment. content === deletedComment.content )
          expect(isFound).to.be.false
        })
      })
    })
  })
})