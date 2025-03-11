import { Sexe, Status, Utilisateur } from "@prisma/client";

export interface CreateUserInput {
  name: string;
  email: string;
  adresse: string;
  sexe: Sexe; // Utilisez l'enum Sexe généré par Prisma
  age: string;
  telephone: string;
  status: Status; // Utilisez l'enum Status généré par Prisma
  password: string;
}

export interface UpdateUserInput {
  name?: string;
  email?: string;
  adresse?: string;
  sexe?: Sexe;
  age?: string;
  telephone?: string;
  status?: Status;
  password?: string;
}

// Utilisez le type généré par Prisma pour User
export type User = Utilisateur;
