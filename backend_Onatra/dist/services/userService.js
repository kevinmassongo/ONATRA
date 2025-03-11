"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.getAllUsers = exports.deleteUser = exports.updateUser = exports.getUserByEmail = exports.getUserById = exports.createUser = void 0;
const userRepository_1 = require("../repositories/userRepository");
const jwtUtils_1 = require("../utils/jwtUtils");
const createUser = async (userData) => {
    return (0, userRepository_1.createUser)(userData);
};
exports.createUser = createUser;
const getUserById = async (id) => {
    return (0, userRepository_1.getUserById)(id);
};
exports.getUserById = getUserById;
const getUserByEmail = async (email) => {
    return (0, userRepository_1.getUserByEmail)(email);
};
exports.getUserByEmail = getUserByEmail;
const updateUser = async (id, userData) => {
    return (0, userRepository_1.updateUser)(id, userData);
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    await (0, userRepository_1.deleteUser)(id);
};
exports.deleteUser = deleteUser;
const getAllUsers = async () => {
    return (0, userRepository_1.getAllUsers)();
};
exports.getAllUsers = getAllUsers;
const loginUser = async (email, password) => {
    const user = await (0, exports.getUserByEmail)(email);
    if (!user || user.password !== password) {
        return null;
    }
    return (0, jwtUtils_1.generateToken)(user.id);
};
exports.loginUser = loginUser;
