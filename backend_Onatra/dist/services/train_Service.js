"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrainService = exports.updateTrainService = exports.getTrainByIdService = exports.getTrainsService = exports.createTrainService = void 0;
// src/services/trainService.ts
const trainRepository_1 = require("../repositories/trainRepository");
// Créer un train
const createTrainService = async (trainData) => {
    return await (0, trainRepository_1.createTrain)(trainData);
};
exports.createTrainService = createTrainService;
// Récupérer tous les trains
const getTrainsService = async () => {
    return await (0, trainRepository_1.getTrains)();
};
exports.getTrainsService = getTrainsService;
// Récupérer un train par son ID
const getTrainByIdService = async (id) => {
    return await (0, trainRepository_1.getTrainById)(id);
};
exports.getTrainByIdService = getTrainByIdService;
// Mettre à jour un train
const updateTrainService = async (id, trainData) => {
    return await (0, trainRepository_1.updateTrain)(id, trainData);
};
exports.updateTrainService = updateTrainService;
// Supprimer un train
const deleteTrainService = async (id) => {
    await (0, trainRepository_1.deleteTrain)(id);
};
exports.deleteTrainService = deleteTrainService;
