// src/controllers/TrainController.ts
import { Request, Response } from "express";
import {
  createTrainService,
  getTrainsService,
  getTrainByIdService,
  updateTrainService,
  deleteTrainService,
} from "../services/train_Service";

// Créer un train
export const createTrain = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const trainData = req.body;
    const train = await createTrainService(trainData);
    res.status(201).json(train);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Récupérer tous les trains
export const getTrains = async (req: Request, res: Response): Promise<void> => {
  try {
    const trains = await getTrainsService();
    res.status(200).json(trains);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Récupérer un train par son ID
export const getTrainById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const train = await getTrainByIdService(id);
    if (train) {
      res.status(200).json(train);
    } else {
      res.status(404).json({ message: "Train non trouvé" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Mettre à jour un train
export const updateTrain = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const trainData = req.body;
    const train = await updateTrainService(id, trainData);
    res.status(200).json(train);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Supprimer un train
export const deleteTrain = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await deleteTrainService(id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};
