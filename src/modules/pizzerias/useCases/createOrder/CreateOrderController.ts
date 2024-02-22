import {Request, Response} from "express";
import {container} from "tsyringe";
import {CreateOrderUseCase} from "@/modules/pizzerias/useCases/createOrder/CreateOrderUseCase";

export class CreateOrderController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { pizzas } = req.body;

        const createOrderUseCase = container.resolve(CreateOrderUseCase);

        await createOrderUseCase.execute(pizzas);

        return res.status(201).send();
    }
}