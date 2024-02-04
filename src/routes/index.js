import { Router } from "express";
import { indexController } from "../controllers/index.js";

const indexRoutes = Router();

indexRoutes.get('/', indexController);

export { indexRoutes };