import express from "express";
import {
  createGare,
  getGares,
  getGareById,
  updateGare,
  deleteGare,
} from "../controllers/gareController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router
  .route("/gares")
  .post(authMiddleware, createGare) // Créer une gare
  .get(authMiddleware, getGares); // Récupérer toutes les gares

router
  .route("/gares/:id")
  .get(authMiddleware, getGareById) // Récupérer une gare par son ID
  .put(authMiddleware, updateGare) // Mettre à jour une gare
  .delete(authMiddleware, deleteGare); // Supprimer une gare

export default router;
