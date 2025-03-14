"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jwtUtils_1 = require("../utils/jwtUtils");
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "Token manquant" });
        return;
    }
    const decoded = (0, jwtUtils_1.verifyToken)(token);
    if (!decoded) {
        res.status(401).json({ message: "Token invalide" });
        return;
    }
    req.userId = decoded.userId;
    next();
};
exports.authMiddleware = authMiddleware;
