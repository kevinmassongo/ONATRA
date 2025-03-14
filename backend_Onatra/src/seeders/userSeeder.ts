// src/seeders/userSeeder.ts
import { PrismaClient, Sexe, Status } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function seedUsers() {
  try {
    const users = [
      {
        name: "joel",
        email: "Joelshimba@example.com",
        adresse: "123 Rue de Paris",
        sexe: "homme" as Sexe,
        age: "25",
        telephone: "0123456789",
        status: "actif" as Status,
        password: await bcrypt.hash("Simeonshimba12", 10),
      },
      {
        name: "ilunga neith",
        email: "Ilungashimba@example.com",
        adresse: "123 Rue de Paris",
        sexe: "homme" as Sexe,
        age: "30",
        telephone: "0123456789",
        status: "actif" as Status,
        password: await bcrypt.hash("Vanessashimba12", 10),
      },
    ];

    for (const user of users) {
      await prisma.utilisateur.create({ data: user });
    }

    console.log("Seeders pour Utilisateur terminés avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'exécution des seeders :", error);
  } finally {
    await prisma.$disconnect();
  }
}

seedUsers();
