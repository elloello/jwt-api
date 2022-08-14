import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { config } from "dotenv"; config({path: '../config/.env'});

interface User {
  username: string,
  password: string 
};

// POST /jwt
// access: public

export default async function jwtSign(req: Request, res: Response) {

  // Get username from request body
  const { username }: User = req.body;

  // Generate the token           
  sign({username}, String(process.env.SECRET), (error: Error | null , token?: string) => {
    if (error) res.status(400).send("Bad request");
    res.json({
      token
    });
  });
};