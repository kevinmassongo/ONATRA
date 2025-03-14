"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const train_Controller_1 = require("../controllers/train_Controller");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = express_1.default.Router();
router
    .route("/trains")
    .post(authMiddleware_1.authMiddleware, train_Controller_1.createTrain)
    .get(authMiddleware_1.authMiddleware, train_Controller_1.getTrains);
router
    .route("/trains/:id")
    .get(authMiddleware_1.authMiddleware, train_Controller_1.getTrainById)
    .put(authMiddleware_1.authMiddleware, train_Controller_1.updateTrain)
    .delete(authMiddleware_1.authMiddleware, train_Controller_1.deleteTrain);
exports.default = router;
