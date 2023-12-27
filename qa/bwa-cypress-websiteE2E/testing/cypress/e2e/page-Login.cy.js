// describe : Untuk judul testing
// it : mewakili 1 scenario
// visit : untuk redirect ke url
// eq : equal (===)
// get : untuk mendapat component html
// input[name='email'] : tag input yang memiliki attribute name='email'
// beforeEach : akan dijalankan sebelum setiap blok pengujian

describe("Page - Login", () => {
  const emailCorrect = 'user@react.test';
  const emailWrong = 'wrong@react.test';
  const pass = 'password';
  const pageIndex = "http://localhost:3000/"
  const pageDash = "http://localhost:3000/dashboard"

  beforeEach(() => {
    cy.visit(pageIndex);
  })

  it("Successfully load the page", () => {
    cy.title().should("eq", "React Gallery");
    cy.contains("Hello Again");

    cy.contains('Forgot Password ?').click()
    cy.url().should('include', '/')

    cy.contains("Don't have an account yet?").click()
    cy.url().should('include', '/')
  });

  it("Contains email and password input and Login button", () => {
    // check email
    const email = cy.get("input[name='email']").should("be.visible");
    email.should("have.attr", "type", "email");
    email.should("have.attr", "placeholder", "Email Address");
    
    // check password
    const password = cy.get("input[name='password']").should("be.visible");
    password.should("have.attr", "type", "password");
    password.should("have.attr", "placeholder", "Password");
  
    // check login button
    const button = cy.get('.button-primary').should("be.visible").contains("Login");
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Do login with null values", () => {
    cy.get('.button-primary').click();

    // Testing alert window dengan fungsi callbock pada pesannya
    cy.on("window:alert", (message) => {
      expect(message).to.contains("login failed");
    });
  });

  it("Do login with wrong values", () => {
    cy.get("input[name='email']").type(emailWrong); // type = fill
    cy.wait(250);
    cy.get("input[name='password']").type(pass);   // type = fill
    cy.wait(250);
    cy.get('.button-primary').click();
    
    cy.on("window:alert", (message) => {
      expect(message).to.contains("login failed");
    });
  });
  
  it("Do login with correct values", () => {
    cy.get("input[name='email']").type(emailCorrect);
    cy.wait(250);
    cy.get("input[name='password']").type(pass);
    cy.wait(250);
    cy.get('.button-primary').click();
    
    cy.on("window:alert", (message) => {
      expect(message).to.contains("welcome");
    });
    cy.wait(250);
    
    // cy.url().should('include', '/dashboard')
    cy.url().should('eq', pageDash)
  });

  it("Logout", () => {
    cy.visit(pageDash)
    cy.wait(1000);
    cy.contains('Logout').click()
    cy.url().should("eq", pageIndex);
  })
});