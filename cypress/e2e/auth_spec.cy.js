describe("Authentication API Tests", () => {
  // Test case for user registration
  it("Should register a new user", () => {
    cy.request("POST", "http://localhost:5000/auth/register", {
      name: "John Doe",
      email: "john@example.com",
      password: "password123",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // Test case for user login
  it("Should log in an existing user", () => {
    cy.request("POST", "http://localhost:5000/auth/login", {
      email: "john@example.com",
      password: "password123",
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
