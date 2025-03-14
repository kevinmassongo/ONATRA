"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGare = exports.updateGare = exports.getGareById = exports.getGares = exports.createGare = void 0;
const gareRepository_1 = require("../repositories/gareRepository");
// Créer une gare
const createGare = async (data) => {
    return await (0, gareRepository_1.createGare)(data);
};
exports.createGare = createGare;
// Récupérer toutes les gares
const getGares = async () => {
    return await (0, gareRepository_1.getGares)();
};
exports.getGares = getGares;
// Récupérer une gare par son ID
const getGareById = async (id) => {
    const gare = await (0, gareRepository_1.getGareById)(id);
    if (!gare) {
        throw new Error("Gare non trouvée");
    }
    return gare;
};
exports.getGareById = getGareById;
// Mettre à jour une gare
const updateGare = async (id, data) => {
    return await (0, gareRepository_1.updateGare)(id, data);
};
exports.updateGare = updateGare;
// Supprimer une gare
const deleteGare = async (id) => {
    return await (0, gareRepository_1.deleteGare)(id);
};
exports.deleteGare = deleteGare;
