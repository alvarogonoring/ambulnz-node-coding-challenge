import {inject, injectable} from "tsyringe";
import {IOrdersRepository} from "@/interfaces/IOrdersRepository";
import {IPizzasRepository} from "@/interfaces/IPizzasRepository";

@injectable()
export class OrderDetailsUseCase {
    constructor(
        @inject('OrdersRepository')
        private ordersRepository: IOrdersRepository
    ) {}

    async execute(id: string) {
        return await this.ordersRepository.findById(id);
    }
}