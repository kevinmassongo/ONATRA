// src/services/itineraryService.ts
import {
  createItinerary,
  getItineraries,
  getItineraryById,
  updateItinerary,
  deleteItinerary,
} from "../repositories/ItineraryRepository";
import { Itineraire } from "@prisma/client";

// Créer un itinéraire
export const createItineraryService = async (
  itineraryData: Omit<Itineraire, "id">
): Promise<Itineraire> => {
  return await createItinerary(itineraryData);
};

// Récupérer tous les itinéraires
export const getItinerariesService = async (): Promise<Itineraire[]> => {
  return await getItineraries();
};

// Récupérer un itinéraire par son ID
export const getItineraryByIdService = async (
  id: string
): Promise<Itineraire | null> => {
  return await getItineraryById(id);
};

// Mettre à jour un itinéraire
export const updateItineraryService = async (
  id: string,
  itineraryData: Partial<Itineraire>
): Promise<Itineraire> => {
  return await updateItinerary(id, itineraryData);
};

// Supprimer un itinéraire
export const deleteItineraryService = async (id: string): Promise<void> => {
  await deleteItinerary(id);
};
