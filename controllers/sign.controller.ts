import { Request, Response } from "express";
import { sign } from "jsonwebtoken";
import { config } from "dotenv"; config({path: '../config/.env'});

import { z, AnyZodObject } from "zod";

interface User {
  username: string,
};

export const schema = z.object({
  body: z.object({
    username: z.string({
      required_error: "provide the shit blin",
    }),
  })
});

// POST /jwt
// access: public

export default async function jwtSign(req: Request, res: Response) {

  // Get username from request body
  const { username }: User = req.body;

  // Generate the token
  sign({username}, String(process.env.SECRET), (error: Error | null , token?: string) => {
    if (error) res.status(400).send("Something went wrong.");
    res.json({
      token
    });
  });
};