"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGare = exports.updateGare = exports.getGareById = exports.getGares = exports.createGare = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Créer une gare
const createGare = async (data) => {
    return await prisma.gare.create({ data });
};
exports.createGare = createGare;
// Récupérer toutes les gares
const getGares = async () => {
    return await prisma.gare.findMany();
};
exports.getGares = getGares;
// Récupérer une gare par son ID
const getGareById = async (id) => {
    return await prisma.gare.findUnique({
        where: { id },
        include: { trains: true }, // Inclure les trains associés
    });
};
exports.getGareById = getGareById;
// Mettre à jour une gare
const updateGare = async (id, data) => {
    return await prisma.gare.update({
        where: { id },
        data,
    });
};
exports.updateGare = updateGare;
// Supprimer une gare
const deleteGare = async (id) => {
    return await prisma.gare.delete({
        where: { id },
    });
};
exports.deleteGare = deleteGare;
