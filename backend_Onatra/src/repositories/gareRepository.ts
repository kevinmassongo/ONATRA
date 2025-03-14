import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Créer une gare
export const createGare = async (data: {
  reference: string;
  ville: string;
  latitude: number;
  longitude: number;
}) => {
  return await prisma.gare.create({ data });
};

// Récupérer toutes les gares
export const getGares = async () => {
  return await prisma.gare.findMany();
};

// Récupérer une gare par son ID
export const getGareById = async (id: string) => {
  return await prisma.gare.findUnique({
    where: { id },
    include: { trains: true },
  });
};

// Mettre à jour une gare
export const updateGare = async (
  id: string,
  data: {
    reference?: string;
    ville?: string;
    latitude?: number;
    longitude?: number;
  }
) => {
  return await prisma.gare.update({
    where: { id },
    data,
  });
};

// Supprimer une gare
export const deleteGare = async (id: string) => {
  return await prisma.gare.delete({
    where: { id },
  });
};
