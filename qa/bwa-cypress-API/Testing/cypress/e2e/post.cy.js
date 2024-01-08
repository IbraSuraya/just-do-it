describe('Post module', () => {
  const nPost = 15
  const randomId = Cypress._.random(16, 50)

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

  context('EP-2 Get all posts', () => {
    // 1. - return unauthorized
    // 2. + return correct count and data

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('GET', '/posts')
    })

    // CASE 2
    it('C-2 should return correct count and data', () => {
      cy.fixture('data_posts').then((data) => {
        cy.createPosts(data)

        // Get All data
        cy.request({
          method: 'GET',
          url: '/posts',
          headers: {
            authorization: `Bearer ${Cypress.env('token')}`,
          },
        }).then(response => {
          expect(response.status).to.eq(200)
          expect(response.body.success).to.true
          expect(response.body.data.length).to.eq(data.length)

          data.forEach((_post, index) => {
            expect(response.body.data[index].id).to.eq(index + 1)
            expect(response.body.data[index].title).to.eq(_post.title)
            expect(response.body.data[index].content).to.eq(_post.content)
          })
        })
      })
    })
  })

  context('EP-3 Get by ID', () => {
    // 1. - return unauthorized
    // 2. + return correct data
    // 3. - return not found

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('GET', '/posts/900')
    })
    
    // CASE 2
    it('C-2 should return correct data', () => {
      cy.fixture('data_posts').then((data) => {
        data.forEach((_post, index) => {
          cy.request({
            method: 'GET',
            url: `/posts/${index + 1}`,
            headers: { authorization: `Bearer ${Cypress.env('token')}` },
          }).then((response) => {
            const { message, data: {title, content} } = response.body
            expect(response.status).to.be.ok
            expect(message).to.eq("Get a post")
            expect(title).to.eq(_post.title)
            expect(content).to.eq(_post.content)
          })
        })
      })
    })

    // CASE 3
    it('C-3 should return not found', () => {
      cy.request({
        method: 'GET',
        url: `/posts/${randomId}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        failOnStatusCode: false,
      }).then((response) => {
        cy.notFound404(response)
      })
    })
  })

  context('EP-4 Update post', () => {
    // 1. - return unauthorized
    // 2. - return not found
    // 3. - return error validation messages
    // 4. + return correct updated post

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('PATCH', `/posts/${randomId}`)     
    })

    // CASE 2
    it('C-2 should return not found', () => {
      cy.request({
        method: 'PATCH',
        url: `/posts/${randomId}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        failOnStatusCode: false,
      }).then((response) => {
        cy.notFound404(response)
      })
    })

    // CASE 3
    it('C-3 should return error validation messages', () => {
      cy.request({
        method: 'PATCH',
        url: `/posts/${randomId}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        failOnStatusCode: false,
        body: {
          title: false,
          content: randomId,
        },
      }).then((response) => {
        cy.badRequest400(response, [
          'title must be a string',
          'content must be a string',
        ])
      })
    })

    // CASE 4
    it('C-4 should return correct updated post', () => {
      const updatedPost = {
        id: 1,
        title: 'updated title',
        content: 'updated content',
      }

      // update post
      cy.request({
        method: 'PATCH',
        url: `/posts/${updatedPost.id}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        body: {
          title: updatedPost.title,
          content: updatedPost.content,
        },
      }).then((response) => {
        const { success, message, data: { id, title, content } } = response.body
        expect(response.status).to.eq(200)
        expect(success).to.be.true
        expect(title).to.eq(updatedPost.title)
        expect(content).to.eq(updatedPost.content)
        expect(id).to.eq(updatedPost.id)
        expect(message).to.eq("Post updated successfully")
      })

      // check get by id
      cy.request({
        method: 'GET',
        url: `/posts/${updatedPost.id}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
      }).then((response) => {
        const { message, data: {title, content} } = response.body
        expect(response.status).to.be.ok
        expect(message).to.eq("Get a post")
        expect(title).to.eq(updatedPost.title)
        expect(content).to.eq(updatedPost.content)
      })

      // check get all post
      cy.request({
        method: 'GET',
        url: '/posts',
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
      }).then((response) => {
        const post = response.body.data.find(
          (_post) => _post.id === updatedPost.id,
        )

        expect(post.title).to.eq(updatedPost.title)
        expect(post.content).to.eq(updatedPost.content)
      })
    })
  })

  context('EP-5 Delete post', () => {
    // 1. - return unauthorized
    // 2. - return not found
    // 3. + successfully remove the post
    // 4. - not be found the deleted post

    // CASE 1
    it('C-1 should return unauthorized', () => {
      cy.checkUnauthorized('DELETE', `/posts/${randomId}`)
    })

    // CASE 2
    it('C-2 should return not found', () => {
      cy.request({
        method: 'DELETE',
        url: `/posts/${randomId}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        failOnStatusCode: false,
      }).then((response) => {
        cy.notFound404(response)
      })
    })

    // CASE 3
    it('C-3 should successfully remove the post', () => {
      const testID = 1
      cy.request({
        method: 'DELETE',
        url: `/posts/${testID}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
      }).then((response) => {
        expect(response.status).to.be.ok
        expect(response.body.success).to.be.true
        expect(response.body.message).to.eq('Post deleted successfully')
      })

      // check get by id=1
      cy.request({
        method: 'GET',
        url: `/posts/${testID}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        failOnStatusCode: false
      }).then((response) => {
        cy.notFound404(response)
      })
    })

    // CASE 4
    it('should not be found the deletede post', () => {
      const testID = 1
      // check get by id
      cy.request({
        method: 'GET',
        url: `/posts/${testID}`,
        headers: { authorization: `Bearer ${Cypress.env('token')}` },
        failOnStatusCode: false,
      }).then((response) => {
        cy.notFound404(response)
      })

      // check get all post
      cy.request({
        method: 'GET',
        url: '/posts',
        headers: {
          authorization: `Bearer ${Cypress.env('token')}`,
        },
      }).then((response) => {
        const post = response.body.data.find((_post) => _post.id === testID)
        expect(post).to.be.undefined
      })
    })
  })
})