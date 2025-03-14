"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGare = exports.updateGare = exports.getGareById = exports.getGares = exports.createGare = void 0;
const gareService_1 = require("../services/gareService");
// Créer une gare
const createGare = async (req, res) => {
    try {
        const { reference, ville, latitude, longitude } = req.body;
        const gare = await (0, gareService_1.createGare)({
            reference,
            ville,
            latitude,
            longitude,
        });
        res.status(201).json(gare);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la création de la gare", error });
    }
};
exports.createGare = createGare;
// Récupérer toutes les gares
const getGares = async (req, res) => {
    try {
        const gares = await (0, gareService_1.getGares)();
        res.status(200).json(gares);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la récupération des gares", error });
    }
};
exports.getGares = getGares;
// Récupérer une gare par son ID
const getGareById = async (req, res) => {
    try {
        const { id } = req.params;
        const gare = await (0, gareService_1.getGareById)(id);
        res.status(200).json(gare);
    }
    catch (error) {
        res.status(404).json({ message: "Gare non trouvée", error });
    }
};
exports.getGareById = getGareById;
// Mettre à jour une gare
const updateGare = async (req, res) => {
    try {
        const { id } = req.params;
        const { reference, ville, latitude, longitude } = req.body;
        const gare = await (0, gareService_1.updateGare)(id, {
            reference,
            ville,
            latitude,
            longitude,
        });
        res.status(200).json(gare);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la mise à jour de la gare", error });
    }
};
exports.updateGare = updateGare;
// Supprimer une gare
const deleteGare = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, gareService_1.deleteGare)(id);
        res.status(204).json({ message: "Gare supprimée avec succès" });
    }
    catch (error) {
        res
            .status(500)
            .json({ message: "Erreur lors de la suppression de la gare", error });
    }
};
exports.deleteGare = deleteGare;
