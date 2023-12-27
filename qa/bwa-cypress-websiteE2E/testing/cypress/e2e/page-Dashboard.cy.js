describe("Page - Dashboard", () => {
  const pageIndex = "http://localhost:3000/"
  const pageDash = "http://localhost:3000/dashboard"
  const photos = [
    {
      imageValue:
        "https://images.unsplash.com/photo-1655194911449-9f327e3d5a06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      descriptionValue: "Image 1: Lorem Ipsum",
    },
    {
      imageValue:
        "https://images.unsplash.com/photo-1655212941945-4c6415a4dae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      descriptionValue: "Image 2: Lorem Ipsum",
    },];

  beforeEach(() => {
    cy.visit(pageDash);
  })
  
  it("Found no post for the first time", () => {
    cy.contains("Found 0 photos");
  });

  it("Contains Image url and description input, and Publish button", () => {
    // check image
    const image = cy.get("input[name='image']").should("be.visible");
    image.should("have.attr", "type", "url");
    image.should("have.attr", "required", "required");
    image.should("have.attr", "placeholder", "Image URL");

    // check description
    const description = cy.get("input[name='desc']").should("be.visible");
    description.should("have.attr", "type", "text");
    description.should("have.attr", "required", "required");
    description.should("have.attr", "placeholder", "What's on your mind?");

    // check publish button
    const button = cy.contains("Publish!").should("be.visible");
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it("Upload Some Photos", () => {
    photos.forEach(({ imageValue, descriptionValue }) => {
      cy.get("input[name='image']").type(imageValue);
      cy.wait(250);
      cy.get("input[name='desc']").type(descriptionValue);
      cy.wait(250);
      cy.contains("Publish!").click();
      cy.wait(250);

      cy.get("img").should("have.attr", "src", imageValue);
      cy.contains(descriptionValue);
    });

    cy.contains(`Found ${photos.length} photos`)
  });

  it("Upload with URL Photo and null decsription", () => {
    photos.forEach(({ imageValue, descriptionValue }) => {
      cy.get("input[name='image']").clear().type(imageValue);
      cy.wait(250);
      cy.contains("Publish!").click();
      cy.wait(250);
      cy.get("input[name='desc']").invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
    })
  })

  it("Upload with null URL Photo and decsription", () => {
    photos.forEach(({ imageValue, descriptionValue }) => {
      cy.get("input[name='desc").clear().type(descriptionValue);
      cy.wait(250);
      cy.contains("Publish!").click();
      cy.wait(250);
      cy.get("input[name='image']").invoke('prop', 'validationMessage').should('equal', "Please fill out this field.")
    })
  })

  it("Logout", () => {
    cy.visit(pageDash)
    cy.wait(2000);
    cy.contains('Logout').click()
    cy.url().should("eq", pageIndex);
  })
});
