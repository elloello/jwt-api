import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

// Verifying middleware to check the jwt token

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token: string = req.headers['authorization'] && req.headers['authorization'].split(' ')[1] || '';

  if (token === '') return res.status(401).send("Unauthorized");
  verify(token, String(process.env.SECRET), (err: Error | null, user) => {
    (<any>req).user = user; // it works, don't touch it
    next();
  });
};

// GET /
// access: private

export async function prot(req: Request, res: Response) {
  res.json({
    protected: true,
  });
};