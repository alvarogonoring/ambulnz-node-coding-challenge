import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreatePizzaUseCase} from "@/modules/pizzerias/useCases/createPizza/CreatePizzaUseCase";

export class CreatePizzaController {
    async handle(req: Request, res: Response): Promise<Response> {
        const {name, price, ingredients} = req.body;

        const createPizzaUseCase = container.resolve(CreatePizzaUseCase);

        await createPizzaUseCase.execute({
            name,
            price,
            ingredients: ingredients.join()
        });

        return res.status(201).send();
    }
}