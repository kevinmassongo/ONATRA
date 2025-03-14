// src/controllers/ItineraryController.ts
import { Request, Response } from "express";
import {
  createItineraryService,
  getItinerariesService,
  getItineraryByIdService,
  updateItineraryService,
  deleteItineraryService,
} from "../services/itineraryService";

// Créer un itinéraire
export const createItinerary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const itineraryData = req.body;
    const itinerary = await createItineraryService(itineraryData);
    res.status(201).json(itinerary);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Récupérer tous les itinéraires
export const getItineraries = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const itineraries = await getItinerariesService();
    res.status(200).json(itineraries);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Récupérer un itinéraire par son ID
export const getItineraryById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const itinerary = await getItineraryByIdService(id);
    if (itinerary) {
      res.status(200).json(itinerary);
    } else {
      res.status(404).json({ message: "Itinéraire non trouvé" });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Mettre à jour un itinéraire
export const updateItinerary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const itineraryData = req.body;
    const itinerary = await updateItineraryService(id, itineraryData);
    res.status(200).json(itinerary);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};

// Supprimer un itinéraire
export const deleteItinerary = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await deleteItineraryService(id);
    res.status(204).send();
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: "Une erreur inconnue s'est produite" });
    }
  }
};
