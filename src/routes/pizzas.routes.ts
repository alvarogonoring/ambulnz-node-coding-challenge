import {Router} from "express";
import {CreatePizzaController} from "@/modules/pizzerias/useCases/createPizza/CreatePizzaController";

export const pizzasRoutes = Router();

const createPizzaController = new CreatePizzaController();

pizzasRoutes.post('/', createPizzaController.handle);