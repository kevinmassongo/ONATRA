"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/seeders/userSeeder.ts
const client_1 = require("@prisma/client");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function seedUsers() {
    try {
        const users = [
            {
                name: "joel",
                email: "Joelshimba@example.com",
                adresse: "123 Rue de Paris",
                sexe: "homme",
                age: "25",
                telephone: "0123456789",
                status: "actif",
                password: await bcrypt_1.default.hash("Simeonshimba12", 10), // Hash du mot de passe
            },
            {
                name: "ilunga neith",
                email: "Ilungashimba@example.com",
                adresse: "123 Rue de Paris",
                sexe: "homme",
                age: "30",
                telephone: "0123456789",
                status: "actif",
                password: await bcrypt_1.default.hash("Vanessashimba12", 10),
                // password: await bcrypt.hash("password2", 10), // Hash du mot de passe
            },
        ];
        for (const user of users) {
            await prisma.utilisateur.create({ data: user });
        }
        console.log("Seeders pour Utilisateur terminés avec succès !");
    }
    catch (error) {
        console.error("Erreur lors de l'exécution des seeders :", error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedUsers();
