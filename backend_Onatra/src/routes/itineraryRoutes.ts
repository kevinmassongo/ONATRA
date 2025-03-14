import express from "express";
import {
  createItinerary,
  getItineraries,
  getItineraryById,
  updateItinerary,
  deleteItinerary,
} from "../controllers/itineraryController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router
  .route("/itineraries")
  .post(authMiddleware, createItinerary)
  .get(authMiddleware, getItineraries);

router
  .route("/itineraries/:id")
  .get(authMiddleware, getItineraryById)
  .put(authMiddleware, updateItinerary)
  .delete(authMiddleware, deleteItinerary);

export default router;
