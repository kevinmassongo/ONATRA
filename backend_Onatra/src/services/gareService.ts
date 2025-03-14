import {
  createGare as createGareRepo,
  getGares as getGaresRepo,
  getGareById as getGareByIdRepo,
  updateGare as updateGareRepo,
  deleteGare as deleteGareRepo,
} from "../repositories/gareRepository";

// Créer une gare
export const createGare = async (data: {
  reference: string;
  ville: string;
  latitude: number;
  longitude: number;
}) => {
  return await createGareRepo(data);
};

// Récupérer toutes les gares
export const getGares = async () => {
  return await getGaresRepo();
};

// Récupérer une gare par son ID
export const getGareById = async (id: string) => {
  const gare = await getGareByIdRepo(id);
  if (!gare) {
    throw new Error("Gare non trouvée");
  }
  return gare;
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
  return await updateGareRepo(id, data);
};

// Supprimer une gare
export const deleteGare = async (id: string) => {
  return await deleteGareRepo(id);
};
