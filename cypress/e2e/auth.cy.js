// Define user credentials
const userCredentials = {
  name: "John Doe",
  email: "john@example.com",
  password: "password123",
};

// Function to perform user registration
const registerUser = () => {
  cy.request(
    "POST",
    "http://localhost:5000/auth/register",
    userCredentials
  ).then((response) => {
    expect(response.status).to.equal(200);
  });
};

// Function to perform user login
const loginUser = () => {
  cy.request("POST", "http://localhost:5000/auth/login", {
    email: userCredentials.email,
    password: userCredentials.password,
  }).then((response) => {
    expect(response.status).to.equal(200);
  });
};

describe("Authentication API Tests", () => {
  //User registration
  it("Should register a new user", () => {
    registerUser();
  });

  // User login
  it("Should log in an existing user", () => {
    loginUser();
  });
});
