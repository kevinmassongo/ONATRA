"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrain = exports.updateTrain = exports.getTrainById = exports.getTrains = exports.createTrain = void 0;
const train_Service_1 = require("../services/train_Service");
// Créer un train
const createTrain = async (req, res) => {
    try {
        const trainData = req.body;
        const train = await (0, train_Service_1.createTrainService)(trainData);
        res.status(201).json(train);
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
exports.createTrain = createTrain;
// Récupérer tous les trains
const getTrains = async (req, res) => {
    try {
        const trains = await (0, train_Service_1.getTrainsService)();
        res.status(200).json(trains);
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
exports.getTrains = getTrains;
// Récupérer un train par son ID
const getTrainById = async (req, res) => {
    try {
        const { id } = req.params;
        const train = await (0, train_Service_1.getTrainByIdService)(id);
        if (train) {
            res.status(200).json(train);
        }
        else {
            res.status(404).json({ message: "Train non trouvé" });
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
exports.getTrainById = getTrainById;
// Mettre à jour un train
const updateTrain = async (req, res) => {
    try {
        const { id } = req.params;
        const trainData = req.body;
        const train = await (0, train_Service_1.updateTrainService)(id, trainData);
        res.status(200).json(train);
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
exports.updateTrain = updateTrain;
// Supprimer un train
const deleteTrain = async (req, res) => {
    try {
        const { id } = req.params;
        await (0, train_Service_1.deleteTrainService)(id);
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
exports.deleteTrain = deleteTrain;
