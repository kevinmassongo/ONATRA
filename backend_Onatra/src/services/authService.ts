import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { Utilisateur } from "@prisma/client";
import * as userRepository from "../repositories/userRepository";

const SECRET_KEY = "votre_secret_key";

// Fonction pour hacher un mot de passe
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Fonction pour vérifier un mot de passe
export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// Fonction pour générer un token JWT
export const generateToken = (user: Utilisateur): string => {
  return jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
    expiresIn: "1h", // Durée de validité du token
  });
};

// Fonction pour vérifier un token JWT
export const verifyToken = (token: string): jwt.JwtPayload | string => {
  return jwt.verify(token, SECRET_KEY);
};

// Fonction pour authentifier un utilisateur
export const authenticateUser = async (
  email: string,
  password: string
): Promise<Utilisateur | null> => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) return null;

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) return null;

  return user;
};
