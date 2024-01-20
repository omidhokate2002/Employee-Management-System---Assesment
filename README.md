
# Employee Management System

This API manages employee records, supporting basic operations like creating, reading, updating, and deleting employee details. It includes attributes such as Employee ID, First Name, Last Name, Email, Date of Birth, Department, and Position. Users interact with endpoints to perform actions like adding a new employee, getting employee details by ID, updating existing information, and removing an employee. The system is set up with a MongoDB database and follows RESTful principles. It's a straightforward solution for applications needing employee management functionality.
## Prerequisites

1. Node.js and npm installed on your machine.
2. MongoDB database set up, and connection string updated in `./config/database.js`.
3. Create a `.env` file in the root directory with necessary environment variables.

```env
PORT=6000
JWT_SECRET=yourSecretKey
MONGODB_URI=yourMongoDBConnectionString
```
## Installation

1. Open a terminal and navigate to the project directory.
2. Install the required dependencies:

```bash
 npm install

```
## Usage/Examples

```javascript
npm start

```

This will launch the server, and you should see a message like "Server is listening on port 6000" in the console.
## Endpoints

> Authentication Routes :
```
    1. Register a new user: POST http://localhost:6000/auth/register
    2. Login: POST http://localhost:6000/auth/login
```


## Employee Routes (Protected - Requires Authorization Token):

1. **Create a new employee:** 
   - Endpoint: `POST http://localhost:6000/employees`

2. **Get all employees:** 
   - Endpoint: `GET http://localhost:6000/employees`
   - Query Parameters:
      - `department`: Filter by department (e.g., `/api/employees?department=IT`).
      - `sortBy` and `sortOrder`: Sort by name in descending order (e.g., `/api/employees?sortBy=name&sortOrder=desc`).
      - `page` and `limit`: Pagination (e.g., `/api/employees?page=2&limit=10`).

3. **Get a specific employee:** 
   - Endpoint: `GET http://localhost:6000/employees/:id`

4. **Update an employee:** 
   - Endpoint: `PUT http://localhost:6000/employees/:id`

5. **Delete an employee:** 
   - Endpoint: `DELETE http://localhost:6000/employees/:id`
## Running Tests

To run tests, run the following command

```bash
  npm run test
```

> Register a new user:

- Send a POST request to http://localhost:6000/auth/register with a JSON body containing username and password.

> Login:

- Send a POST request to http://localhost:6000/auth/login with the same username and password used during registration.
- Retrieve the JWT token from the response.

> Accessing Protected Routes:

- Include the obtained token in the Authorization header as a Bearer token for requests to routes under /employees.