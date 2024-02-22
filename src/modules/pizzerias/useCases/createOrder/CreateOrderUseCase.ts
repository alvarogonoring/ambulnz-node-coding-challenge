import {IPizzaOrder} from "@/interfaces/IPizzaOrder";
import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "@/interfaces/IOrdersRepository";

@injectable()
export class CreateOrderUseCase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
    ) {
    }
    async execute(pizzas: IPizzaOrder[]): Promise<void> {
        await this.ordersRepository.create(pizzas);
    }
}