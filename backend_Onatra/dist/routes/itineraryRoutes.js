"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const itineraryController_1 = require("../controllers/itineraryController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router
    .route("/itineraries")
    .post(authMiddleware_1.authMiddleware, itineraryController_1.createItinerary)
    .get(authMiddleware_1.authMiddleware, itineraryController_1.getItineraries);
router
    .route("/itineraries/:id")
    .get(authMiddleware_1.authMiddleware, itineraryController_1.getItineraryById)
    .put(authMiddleware_1.authMiddleware, itineraryController_1.updateItinerary)
    .delete(authMiddleware_1.authMiddleware, itineraryController_1.deleteItinerary);
exports.default = router;
