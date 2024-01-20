import express from "express";
import {
  addEmployee,
  getEmployees,
  getEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.post("/", addEmployee);
router.get("/", getEmployees);
router.get("/:employeeId", getEmployee);
router.put("/:employeeId", updateEmployee);
router.delete("/:employeeId", deleteEmployee);

export default router;
