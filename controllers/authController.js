import jwt from "jsonwebtoken";
import User from "../models/user.js";
import bcrypt from "bcryptjs";

const JWT_KEY = process.env.JWT_KEY;

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .send({ result: "Name, email, and password are required." });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send({ result: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    const user = savedUser.toObject();
    delete user.password;
    const token = jwt.sign({ userId: user._id }, JWT_KEY, { expiresIn: "24h" });

    res.send({ user, auth: token });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ result: "Email and password are required." });
    }

    const user = await User.findOne({ email });

    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        const userWithoutPassword = user.toObject();
        delete userWithoutPassword.password;

        const token = jwt.sign({ userId: user._id }, JWT_KEY, {
          expiresIn: "24h",
        });

        res.send({ user: userWithoutPassword, auth: token });
      } else {
        res.status(401).send({ result: "Invalid password." });
      }
    } else {
      res.status(404).send({ result: "User not found." });
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ error: error.message });
  }
};
