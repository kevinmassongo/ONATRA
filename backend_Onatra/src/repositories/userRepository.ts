import { PrismaClient, Utilisateur } from "@prisma/client";

const prisma = new PrismaClient();

export const createUser = async (
  userData: Omit<Utilisateur, "id">
): Promise<Utilisateur> => {
  return prisma.utilisateur.create({ data: userData });
};

export const getUserById = async (id: string): Promise<Utilisateur | null> => {
  return prisma.utilisateur.findUnique({ where: { id } });
};

export const getUserByEmail = async (
  email: string
): Promise<Utilisateur | null> => {
  return prisma.utilisateur.findUnique({ where: { email } });
};

export const updateUser = async (
  id: string,
  userData: Partial<Utilisateur>
): Promise<Utilisateur> => {
  return prisma.utilisateur.update({ where: { id }, data: userData });
};

export const deleteUser = async (id: string): Promise<void> => {
  await prisma.utilisateur.delete({ where: { id } });
};

export const getAllUsers = async (): Promise<Utilisateur[]> => {
  return prisma.utilisateur.findMany();
};
