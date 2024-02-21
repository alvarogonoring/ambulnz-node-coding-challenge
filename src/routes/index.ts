import {Router} from "express";
import {pizzasRoutes} from "@/routes/pizzas.routes";

export const router = Router();

router.use('/pizzas', pizzasRoutes);