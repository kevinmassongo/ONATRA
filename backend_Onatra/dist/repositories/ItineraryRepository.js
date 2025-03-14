"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItinerary = exports.updateItinerary = exports.getItineraryById = exports.getItineraries = exports.createItinerary = void 0;
// src/repositories/itineraryRepository.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Créer un itinéraire
const createItinerary = async (itineraryData) => {
    return await prisma.itineraire.create({ data: itineraryData });
};
exports.createItinerary = createItinerary;
// Récupérer tous les itinéraires
const getItineraries = async () => {
    return await prisma.itineraire.findMany();
};
exports.getItineraries = getItineraries;
// Récupérer un itinéraire par son ID
const getItineraryById = async (id) => {
    return await prisma.itineraire.findUnique({ where: { id } });
};
exports.getItineraryById = getItineraryById;
// Mettre à jour un itinéraire
const updateItinerary = async (id, itineraryData) => {
    return await prisma.itineraire.update({ where: { id }, data: itineraryData });
};
exports.updateItinerary = updateItinerary;
// Supprimer un itinéraire
const deleteItinerary = async (id) => {
    await prisma.itineraire.delete({ where: { id } });
};
exports.deleteItinerary = deleteItinerary;
