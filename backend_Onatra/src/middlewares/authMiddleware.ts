// import { Request, Response, NextFunction } from "express";
// import { verifyToken } from "../utils/jwtUtils";

// export const authMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ): void => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) {
//     res.status(401).json({ message: "Token manquant" });
//     return;
//   }

//   const decoded = verifyToken(token);
//   if (!decoded) {
//     res.status(401).json({ message: "Token invalide" });
//     return;
//   }

//   req.userId = decoded.userId;
//   next();
// };
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtUtils";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Vérifier le format du token
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("Format de token invalide");
    }

    // Extraire le token
    const token = authHeader.split(" ")[1];
    if (!token) {
      throw new Error("Token manquant");
    }

    // Vérifier et décoder le token
    const decoded = verifyToken(token);
    if (!decoded) {
      throw new Error("Token invalide ou expiré");
    }

    // Ajouter l'ID de l'utilisateur à la requête
    req.userId = decoded.userId;

    // Passer au middleware suivant
    next();
  } catch (error) {
    // Passer l'erreur au gestionnaire d'erreurs
    next(error);
  }
};
