import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListPizzasUseCase} from "@/modules/pizzerias/useCases/listPizzas/ListPizzasUseCase";

export class ListPizzasController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listPizzasUseCase = container.resolve(ListPizzasUseCase);

        const pizzas = await listPizzasUseCase.execute().then(pizzas => {
            return pizzas.map(pizza => ({
                ...pizza,
                price: Number(pizza.price),
                ingredients: typeof pizza.ingredients === 'string' && pizza.ingredients.split(',')
            }))
        });

        return res.status(200).json(pizzas);
    }
}