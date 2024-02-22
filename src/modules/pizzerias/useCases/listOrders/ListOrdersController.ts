import {Request, Response} from "express";
import {container} from "tsyringe";
import {ListOrdersUseCase} from "@/modules/pizzerias/useCases/listOrders/ListOrdersUseCase";

export class ListOrdersController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listOrdersUseCase = container.resolve(ListOrdersUseCase);

        const orders = await listOrdersUseCase.execute();

        return res.status(200).json(orders);
    }
}