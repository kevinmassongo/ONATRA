import express from "express";
import {
  createTrain,
  getTrains,
  getTrainById,
  updateTrain,
  deleteTrain,
} from "../controllers/train_Controller";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

router
  .route("/trains")
  .post(authMiddleware, createTrain)
  .get(authMiddleware, getTrains);

router
  .route("/trains/:id")
  .get(authMiddleware, getTrainById)
  .put(authMiddleware, updateTrain)
  .delete(authMiddleware, deleteTrain);

export default router;
