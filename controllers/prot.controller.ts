import { Request, Response } from "express";

// GET /
// access: private

export default async function prot(req: Request, res: Response) {
  res.json({
    protected: true,
  });
};