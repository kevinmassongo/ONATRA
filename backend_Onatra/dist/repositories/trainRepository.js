"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrain = exports.updateTrain = exports.getTrainById = exports.getTrains = exports.createTrain = void 0;
// src/repositories/trainRepository.ts
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Créer un train
const createTrain = async (trainData) => {
    return await prisma.train.create({ data: trainData });
};
exports.createTrain = createTrain;
// Récupérer tous les trains
const getTrains = async () => {
    return await prisma.train.findMany();
};
exports.getTrains = getTrains;
// Récupérer un train par son ID
const getTrainById = async (id) => {
    return await prisma.train.findUnique({ where: { id } });
};
exports.getTrainById = getTrainById;
// Mettre à jour un train
const updateTrain = async (id, trainData) => {
    return await prisma.train.update({ where: { id }, data: trainData });
};
exports.updateTrain = updateTrain;
// Supprimer un train
const deleteTrain = async (id) => {
    await prisma.train.delete({ where: { id } });
};
exports.deleteTrain = deleteTrain;
