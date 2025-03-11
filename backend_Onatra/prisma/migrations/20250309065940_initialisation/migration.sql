-- CreateEnum
CREATE TYPE "Sexe" AS ENUM ('homme', 'femme');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('actif', 'inactif');

-- CreateEnum
CREATE TYPE "IncidentStatus" AS ENUM ('EN_COURS', 'RESOLU');

-- CreateTable
CREATE TABLE "Administrateur" (
    "id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo_profil" TEXT NOT NULL,

    CONSTRAINT "Administrateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PersonnelGare" (
    "id" TEXT NOT NULL,
    "rapport" TEXT NOT NULL,

    CONSTRAINT "PersonnelGare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Utilisateur" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "adresse" TEXT NOT NULL,
    "sexe" "Sexe" NOT NULL,
    "age" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "status" "Status" NOT NULL,

    CONSTRAINT "Utilisateur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gare" (
    "id" TEXT NOT NULL,
    "reference" TEXT NOT NULL,
    "ville" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Gare_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Train" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "nombrePlace" INTEGER NOT NULL,
    "heureDepart" TIMESTAMP(3) NOT NULL,
    "heureArrive" TIMESTAMP(3) NOT NULL,
    "vitesseMax" DOUBLE PRECISION NOT NULL,
    "capacite" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "gareId" TEXT,

    CONSTRAINT "Train_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conducteur" (
    "id" TEXT NOT NULL,
    "heureDepart" TIMESTAMP(3) NOT NULL,
    "heureArrive" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conducteur_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,
    "status" "IncidentStatus" NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Itineraire" (
    "id" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "list_gare" TEXT NOT NULL,
    "list_train" TEXT NOT NULL,
    "distance" INTEGER NOT NULL,
    "gareDepart" TEXT NOT NULL,
    "gareArrivee" TEXT NOT NULL,

    CONSTRAINT "Itineraire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alerte" (
    "id" TEXT NOT NULL,
    "typeAlerte" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "heure" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Alerte_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Utilisateur_email_key" ON "Utilisateur"("email");

-- AddForeignKey
ALTER TABLE "Train" ADD CONSTRAINT "Train_gareId_fkey" FOREIGN KEY ("gareId") REFERENCES "Gare"("id") ON DELETE SET NULL ON UPDATE CASCADE;
