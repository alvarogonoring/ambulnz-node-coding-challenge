import {Request, Response} from "express";
import {container} from "tsyringe";
import {OrderDetailsUseCase} from "@/modules/pizzerias/useCases/orderDetails/OrderDetailsUseCase";
import {AppError} from "@/errors/AppError";

export class OrderDetailsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const orderDetailsUseCase = container.resolve(OrderDetailsUseCase);

        const orderDetails = await orderDetailsUseCase.execute(id);

        if (!orderDetails) {
            throw new AppError('Order not found!');
        }

        return res.status(200).json(orderDetails);
    }
}