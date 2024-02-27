import {Router} from "express";
import {CreatePizzaController} from "@/modules/pizzerias/useCases/createPizza/CreatePizzaController";
import {ListPizzasController} from "@/modules/pizzerias/useCases/listPizzas/ListPizzasController";

export const pizzasRoutes = Router();

const createPizzaController = new CreatePizzaController();
const listPizzasController = new ListPizzasController();

pizzasRoutes.post('/', createPizzaController.handle);

pizzasRoutes.get('/', listPizzasController.handle);