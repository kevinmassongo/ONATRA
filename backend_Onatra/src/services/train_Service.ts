// src/services/trainService.ts
import {
  createTrain,
  getTrains,
  getTrainById,
  updateTrain,
  deleteTrain,
} from "../repositories/trainRepository";
import { Train } from "@prisma/client";

// Créer un train
export const createTrainService = async (
  trainData: Omit<Train, "id">
): Promise<Train> => {
  return await createTrain(trainData);
};

// Récupérer tous les trains
export const getTrainsService = async (): Promise<Train[]> => {
  return await getTrains();
};

// Récupérer un train par son ID
export const getTrainByIdService = async (
  id: string
): Promise<Train | null> => {
  return await getTrainById(id);
};

// Mettre à jour un train
export const updateTrainService = async (
  id: string,
  trainData: Partial<Train>
): Promise<Train> => {
  return await updateTrain(id, trainData);
};

// Supprimer un train
export const deleteTrainService = async (id: string): Promise<void> => {
  await deleteTrain(id);
};
