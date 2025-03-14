// src/repositories/trainRepository.ts
import { PrismaClient, Train } from "@prisma/client";
const prisma = new PrismaClient();

// Créer un train
export const createTrain = async (
  trainData: Omit<Train, "id">
): Promise<Train> => {
  return await prisma.train.create({ data: trainData });
};

// Récupérer tous les trains
export const getTrains = async (): Promise<Train[]> => {
  return await prisma.train.findMany();
};

// Récupérer un train par son ID
export const getTrainById = async (id: string): Promise<Train | null> => {
  return await prisma.train.findUnique({ where: { id } });
};

// Mettre à jour un train
export const updateTrain = async (
  id: string,
  trainData: Partial<Train>
): Promise<Train> => {
  return await prisma.train.update({ where: { id }, data: trainData });
};

// Supprimer un train
export const deleteTrain = async (id: string): Promise<void> => {
  await prisma.train.delete({ where: { id } });
};
