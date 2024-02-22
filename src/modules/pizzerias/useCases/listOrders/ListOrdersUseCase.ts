import {Order} from "@/modules/pizzerias/entities/Order";
import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "@/interfaces/IOrdersRepository";

@injectable()
export class ListOrdersUseCase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
    ) {
    }
    async execute(): Promise<Order[]> {
        return await this.ordersRepository.list();
    }
}