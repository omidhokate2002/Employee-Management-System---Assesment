// cypress/integration/employee_spec.js

// Replace "yourBearerToken" with the actual bearer token
const bearerToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWFiNzgyZWVmMzEwM2E3ZDMxNjM1YzQiLCJpYXQiOjE3MDU3MzYyMzksImV4cCI6MTcwNTgyMjYzOX0.a3GYO9YVAL3csLGY-lPDLxRB6ikw4pVUuQeGHtl0OJ0";

describe("Employee API Tests", () => {
  // Adding a new employee
  it("Should add a new employee", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:5000/employees",
      body: {
        employeeId: "EMP088",
        firstName: "Barber",
        lastName: "Johnson",
        email: "bob.johnson@example.com",
        dateOfBirth: "1988-09-10",
        department: "Finance",
        position: "Financial",
      },
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // Fetching employees
  it("Should get a list of employees", () => {
    cy.request({
      method: "GET",
      url: "http://localhost:5000/employees",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // Fetching a specific employee by ID
  it("Should get a specific employee by ID", () => {
    // Assuming you have an employee ID, replace 'employeeIdValue' with an actual ID
    const employeeIdValue = "employeeIdValue";
    cy.request({
      method: "GET",
      url: `http://localhost:5000/employees/${employeeIdValue}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // Updating an employee
  it("Should update an existing employee", () => {
    // Assuming you have an employee ID and updated data, replace 'employeeIdValue' and 'updatedData' accordingly
    const employeeIdValue = "employeeIdValue";
    const updatedData = {
      name: "Updated Name",
      department: "Updated Department",
      position: "Updated Position",
    };
    cy.request({
      method: "PUT",
      url: `http://localhost:5000/employees/${employeeIdValue}`,
      body: updatedData,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });

  // Deleting an employee
  it("Should delete an existing employee", () => {
    // Assuming you have an employee ID, replace 'employeeIdValue' with an actual ID
    const employeeIdValue = "employeeIdValue";
    cy.request({
      method: "DELETE",
      url: `http://localhost:5000/employees/${employeeIdValue}`,
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});
