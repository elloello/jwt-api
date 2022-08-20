import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

// Verifying middleware to check the jwt token

export function authenticate(req: Request, res: Response, next: NextFunction) {
  const token: string = req.headers['authorization'] && req.headers['authorization'].split(' ')[1] || '';

  if (token === '') return res.status(401).send("Unauthorized");
  verify(token, String(process.env.SECRET), (err: Error | null, user) => {
    if(err) res.status(400).send("Something went wrong.");

    (<any>req).user = user; // it works, don't touch it
    next();
  });
};

// GET /
// access: private

export async function prot(_req: Request, res: Response) {
  res.json({
    protected: true,
  });
};
