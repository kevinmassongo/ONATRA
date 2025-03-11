import express from "express";
import {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
  loginUser,
} from "./controllers/userController";
import { authMiddleware } from "./middlewares/authMiddleware";

const app = express();
app.use(express.json());

// Routes publiques
app.post("/login", loginUser);
app.post("/users", createUser);

// Routes protégées
app.get("/users", authMiddleware, getAllUsers);
app.get("/users/:id", authMiddleware, getUserById);
app.put("/users/:id", authMiddleware, updateUser);
app.delete("/users/:id", authMiddleware, deleteUser);

export default app;
