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
import { errorHandler } from "./middlewares/errorHandler"; // Importez le middleware de gestion des erreurs
import gareRoutes from "./routes/gareRoutes";
import trainRoutes from "./routes/trainRoutes";
import itineraryRoutes from "./routes/itineraryRoutes";

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

// Routes pour les trains, itinéraires et gares
app.use("/api", trainRoutes);
app.use("/api", itineraryRoutes);
app.use("/api", gareRoutes);

// Middleware de gestion des erreurs (doit être le dernier middleware)
app.use(errorHandler);

export default app;
