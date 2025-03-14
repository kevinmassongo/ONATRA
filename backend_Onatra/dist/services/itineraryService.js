"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItineraryService = exports.updateItineraryService = exports.getItineraryByIdService = exports.getItinerariesService = exports.createItineraryService = void 0;
// src/services/itineraryService.ts
const ItineraryRepository_1 = require("../repositories/ItineraryRepository");
// Créer un itinéraire
const createItineraryService = async (itineraryData) => {
    return await (0, ItineraryRepository_1.createItinerary)(itineraryData);
};
exports.createItineraryService = createItineraryService;
// Récupérer tous les itinéraires
const getItinerariesService = async () => {
    return await (0, ItineraryRepository_1.getItineraries)();
};
exports.getItinerariesService = getItinerariesService;
// Récupérer un itinéraire par son ID
const getItineraryByIdService = async (id) => {
    return await (0, ItineraryRepository_1.getItineraryById)(id);
};
exports.getItineraryByIdService = getItineraryByIdService;
// Mettre à jour un itinéraire
const updateItineraryService = async (id, itineraryData) => {
    return await (0, ItineraryRepository_1.updateItinerary)(id, itineraryData);
};
exports.updateItineraryService = updateItineraryService;
// Supprimer un itinéraire
const deleteItineraryService = async (id) => {
    await (0, ItineraryRepository_1.deleteItinerary)(id);
};
exports.deleteItineraryService = deleteItineraryService;
