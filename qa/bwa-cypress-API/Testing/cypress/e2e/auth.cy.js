describe('Auth module', () => {
  const userData = {
    "name": "John Doe",
    "email": "john@nest.test",
    "password": "Secret_123"
  }

  context('EP-Register', () => {
    // CASE 1
    it('CASE 1 Should return error message for validation', () => {
      cy.request({
        method: 'POST',
        url: '/auth/register',
        failOnStatusCode: false,
      }).then((response) => {
        cy.badRequest400(response, [
          'name should not be empty',
          'email should not be empty',
          'password should not be empty'
        ])
      })
    })

    // CASE 2
    it('CASE 2 should return error message for invalid email format', () => {
      cy.request({
        method: 'POST',
        url: '/auth/register',
        body: {
          name: userData.name,
          email: "joh @ nest.test",   // Format email invalid
          password: userData.password
        },
        failOnStatusCode: false,
      }).then((response) => {
        cy.badRequest400(response, [ 'email must be an email' ])
      })
    })

    // CASE 3
    it('CASE 3 should return error message for invalid password format', () => {
      cy.request({
        method: 'POST',
        url: '/auth/register',
        body: {
          name: userData.name,
          email: userData.email,   
          password: "invalid"     // Format pwd invalid
        },
        failOnStatusCode: false,
      }).then((response) => {
        cy.badRequest400(response, [ 'password is not strong enough' ])
      })
    })

    // CASE 4
    it('CASE 4 should successfully registered', () => {
      // Reset akun registered
      cy.resetUsers()
      cy.request({
        method: 'POST',
        url: '/auth/register',
        body: userData,
      }).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.duration).to.be.lessThan(100)
        expect(response.body.success).to.be.true
        expect(response.body.message).to.eq("User registered successfully")
      
        // Cek data yang dikirim
        const{id, name, email, password, role} = response.body.data
        expect(id).not.to.be.undefined
        expect(name).to.eq("John Doe")
        expect(email).to.eq("john@nest.test")
        expect(password).to.be.undefined
        expect(role).to.eq('member')
      })
    })

    // CASE 5
    it('CASE 5 should return error, because of duplicate email', () => {
      cy.request({
        method: 'POST',
        url: '/auth/register',
        body: userData,
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(500)
        expect(response.duration).to.be.lessThan(10)
        expect(response.body.message).to.eq("Email already exists")
        expect(response.body.success).to.be.false
      })
    })
  })
})