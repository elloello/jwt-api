import { Router } from "express";
import { prot, authenticate } from "../controllers/prot.controller";

const protRouter: Router = Router();

// Connect controller
protRouter.get("/", authenticate ,prot);

export default protRouter;