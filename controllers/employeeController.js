import Employee from "../models/employee.js";

export const addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const result = await employee.save();
    res.send(result);
  } catch (error) {
    console.error("Error adding employee:", error.message);
    res.status(500).send({ error: error.message });
  }
};

export const getEmployees = async (req, res) => {
  try {
    let query = {};

    // Filtering
    if (req.query.department) {
      query.department = req.query.department;
    }

    // Sorting
    let sort = {};
    if (req.query.sortBy) {
      sort[req.query.sortBy] = req.query.sortOrder === "desc" ? -1 : 1;
    }

    // Pagination
    let page = parseInt(req.query.page) || 1;
    let pageSize = parseInt(req.query.pageSize) || 10;

    const skip = (page - 1) * pageSize;

    const employees = await Employee.find(query)
      .sort(sort)
      .skip(skip)
      .limit(pageSize);

    if (employees.length > 0) {
      res.send(employees);
    } else {
      res.send({ result: "No Employees found" });
    }
  } catch (error) {
    console.error("Error fetching employees:", error.message);
    res.status(500).send({ error: error.message });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const employee = await Employee.findOne({ employeeId });
    if (employee) {
      res.send(employee);
    } else {
      res.status(404).send({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).send({ error: error.message });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const updatedEmployee = await Employee.findOneAndUpdate(
      { employeeId },
      req.body,
      { new: true }
    );
    if (updatedEmployee) {
      res.send(updatedEmployee);
    } else {
      res.status(404).send({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error updating employee:", error);
    res.status(500).send({ error: error.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const deletedEmployee = await Employee.findOneAndDelete({ employeeId });
    if (deletedEmployee) {
      res.send({ message: "Employee deleted successfully" });
    } else {
      res.status(404).send({ error: "Employee not found" });
    }
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).send({ error: error.message });
  }
};
