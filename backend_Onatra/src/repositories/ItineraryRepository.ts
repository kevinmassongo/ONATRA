// src/repositories/itineraryRepository.ts
import { PrismaClient, Itineraire } from "@prisma/client";
const prisma = new PrismaClient();

// Créer un itinéraire
export const createItinerary = async (
  itineraryData: Omit<Itineraire, "id">
): Promise<Itineraire> => {
  return await prisma.itineraire.create({ data: itineraryData });
};

// Récupérer tous les itinéraires
export const getItineraries = async (): Promise<Itineraire[]> => {
  return await prisma.itineraire.findMany();
};

// Récupérer un itinéraire par son ID
export const getItineraryById = async (
  id: string
): Promise<Itineraire | null> => {
  return await prisma.itineraire.findUnique({ where: { id } });
};

// Mettre à jour un itinéraire
export const updateItinerary = async (
  id: string,
  itineraryData: Partial<Itineraire>
): Promise<Itineraire> => {
  return await prisma.itineraire.update({ where: { id }, data: itineraryData });
};

// Supprimer un itinéraire
export const deleteItinerary = async (id: string): Promise<void> => {
  await prisma.itineraire.delete({ where: { id } });
};
