import { Router } from "express";
import prot from "../controllers/prot.controller";

const protRouter: Router = Router();

// Connect controller
protRouter.get("/", prot);

export default protRouter;