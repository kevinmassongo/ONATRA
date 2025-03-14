import { Request, Response } from "express";
import {
  createGare as createGareService,
  getGares as getGaresService,
  getGareById as getGareByIdService,
  updateGare as updateGareService,
  deleteGare as deleteGareService,
} from "../services/gareService";

// Créer une gare
export const createGare = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { reference, ville, latitude, longitude } = req.body;
    const gare = await createGareService({
      reference,
      ville,
      latitude,
      longitude,
    });
    res.status(201).json(gare);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la création de la gare", error });
  }
};

// Récupérer toutes les gares
export const getGares = async (req: Request, res: Response): Promise<void> => {
  try {
    const gares = await getGaresService();
    res.status(200).json(gares);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des gares", error });
  }
};

// Récupérer une gare par son ID
export const getGareById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const gare = await getGareByIdService(id);
    res.status(200).json(gare);
  } catch (error) {
    res.status(404).json({ message: "Gare non trouvée", error });
  }
};

// Mettre à jour une gare
export const updateGare = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { reference, ville, latitude, longitude } = req.body;
    const gare = await updateGareService(id, {
      reference,
      ville,
      latitude,
      longitude,
    });
    res.status(200).json(gare);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour de la gare", error });
  }
};

// Supprimer une gare
export const deleteGare = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    await deleteGareService(id);
    res.status(204).json({ message: "Gare supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la gare", error });
  }
};
