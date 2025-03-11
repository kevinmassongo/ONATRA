"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUserByEmail = exports.getUserById = exports.createUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createUser = async (userData) => {
    return prisma.utilisateur.create({ data: userData });
};
exports.createUser = createUser;
const getUserById = async (id) => {
    return prisma.utilisateur.findUnique({ where: { id } });
};
exports.getUserById = getUserById;
const getUserByEmail = async (email) => {
    return prisma.utilisateur.findUnique({ where: { email } });
};
exports.getUserByEmail = getUserByEmail;
const updateUser = async (id, userData) => {
    return prisma.utilisateur.update({ where: { id }, data: userData });
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    await prisma.utilisateur.delete({ where: { id } });
};
exports.deleteUser = deleteUser;
const getAllUsers = async () => {
    return prisma.utilisateur.findMany();
};
exports.getAllUsers = getAllUsers;
