import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^\S+@\S+\.\S+$/,
  },
  dateOfBirth: { type: Date, required: true },
  department: { type: String, required: true },
  position: { type: String, required: true },
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;
