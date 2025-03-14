"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItinerary = exports.updateItinerary = exports.getItineraryById = exports.getItineraries = exports.createItinerary = void 0;
const itineraryService_1 = require("../services/itineraryService");
// Créer un itinéraire
const createItinerary = async (req, res) => {
    try {
        const itineraryData = req.body;
        const itinerary = await (0, itineraryService_1.createItineraryService)(itineraryData);
        res.status(201).json(itinerary);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
};
exports.createItinerary = createItinerary;
// Récupérer tous les itinéraires
const getItineraries = async (req, res) => {
    try {
        const itineraries = await (0, itineraryService_1.getItinerariesService)();
        res.status(200).json(itineraries);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
};
exports.getItineraries = getItineraries;
// Récupérer un itinéraire par son ID
const getItineraryById = async (req, res) => {
    try {
        const { id } = req.params;
        const itinerary = await (0, itineraryService_1.getItineraryByIdService)(id);
        if (itinerary) {
            res.status(200).json(itinerary);
        }
        else {
            res.status(404).json({ message: "Itinéraire non trouvé" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
};
exports.getItineraryById = getItineraryById;
// Mettre à jour un itinéraire
const updateItinerary = async (req, res) => {
    try {
        const { id } = req.params;
        const itineraryData = req.body;
        const itinerary = await (0, itineraryService_1.updateItineraryService)(id, itineraryData);
        res.status(200).json(itinerary);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
};
exports.updateItinerary = updateItinerary;
// Supprimer un itinéraire
const deleteItinerary = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, itineraryService_1.deleteItineraryService)(id);
        res.status(204).send();
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Une erreur inconnue s'est produite" });
        }
    }
};
exports.deleteItinerary = deleteItinerary;
