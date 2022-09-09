import { Router } from "express";
import jwtSign from "../controllers/sign.controller";
import { schema } from "../controllers/sign.controller";
import validate from "../middleware/validate";

const signRouter: Router = Router();

// Connect controller
signRouter.post("/jwt", jwtSign);

export default signRouter;