import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwtUtils";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Token manquant" });
    return;
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    res.status(401).json({ message: "Token invalide" });
    return;
  }

  req.userId = decoded.userId;
  next();
};
