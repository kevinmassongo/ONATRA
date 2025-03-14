"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const gareController_1 = require("../controllers/gareController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
// Routes pour les gares
router
    .route("/gares")
    .post(authMiddleware_1.authMiddleware, gareController_1.createGare) // Créer une gare
    .get(authMiddleware_1.authMiddleware, gareController_1.getGares); // Récupérer toutes les gares
router
    .route("/gares/:id")
    .get(authMiddleware_1.authMiddleware, gareController_1.getGareById) // Récupérer une gare par son ID
    .put(authMiddleware_1.authMiddleware, gareController_1.updateGare) // Mettre à jour une gare
    .delete(authMiddleware_1.authMiddleware, gareController_1.deleteGare); // Supprimer une gare
exports.default = router;
