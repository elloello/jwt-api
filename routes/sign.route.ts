import { Router } from "express";
import jwtSign from "../controllers/sign.controller";

const signRouter: Router = Router();

// Connect controller
signRouter.post("/jwt", jwtSign);

export default signRouter;