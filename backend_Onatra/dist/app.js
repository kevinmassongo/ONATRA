"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("./controllers/userController");
const authMiddleware_1 = require("./middlewares/authMiddleware");
const gareRoutes_1 = __importDefault(require("./routes/gareRoutes"));
const trainRoutes_1 = __importDefault(require("./routes/trainRoutes"));
const itineraryRoutes_1 = __importDefault(require("./routes/itineraryRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes publiques
app.post("/login", userController_1.loginUser);
app.post("/users", userController_1.createUser);
// Routes protégées
app.get("/users", authMiddleware_1.authMiddleware, userController_1.getAllUsers);
app.get("/users/:id", authMiddleware_1.authMiddleware, userController_1.getUserById);
app.put("/users/:id", authMiddleware_1.authMiddleware, userController_1.updateUser);
app.delete("/users/:id", authMiddleware_1.authMiddleware, userController_1.deleteUser);
//Train et Itineraire
app.use("/api", trainRoutes_1.default);
app.use("/api", itineraryRoutes_1.default);
// gareroutes
app.use("/api", gareRoutes_1.default);
exports.default = app;
