import {
  createUser as createUserRepo,
  getUserById as getUserByIdRepo,
  getUserByEmail as getUserByEmailRepo,
  updateUser as updateUserRepo,
  deleteUser as deleteUserRepo,
  getAllUsers as getAllUsersRepo,
} from "../repositories/userRepository";
import { generateToken } from "../utils/jwtUtils";
import { Utilisateur } from "@prisma/client";

export const createUser = async (
  userData: Omit<Utilisateur, "id">
): Promise<Utilisateur> => {
  return createUserRepo(userData);
};

export const getUserById = async (id: string): Promise<Utilisateur | null> => {
  return getUserByIdRepo(id);
};

export const getUserByEmail = async (
  email: string
): Promise<Utilisateur | null> => {
  return getUserByEmailRepo(email);
};

export const updateUser = async (
  id: string,
  userData: Partial<Utilisateur>
): Promise<Utilisateur> => {
  return updateUserRepo(id, userData);
};

export const deleteUser = async (id: string): Promise<void> => {
  await deleteUserRepo(id);
};

export const getAllUsers = async (): Promise<Utilisateur[]> => {
  return getAllUsersRepo();
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string | null> => {
  const user = await getUserByEmail(email);
  if (!user || user.password !== password) {
    return null;
  }
  return generateToken(user.id);
};
