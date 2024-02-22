import {Repository} from "typeorm";
import {AppDataSource} from "@/db";
import {IOrdersRepository} from "@/interfaces/IOrdersRepository";
import {Order} from "@/modules/pizzerias/entities/Order";
import {IPizzaOrder} from "@/interfaces/IPizzaOrder";

export class OrdersRepository implements IOrdersRepository {
    private repository: Repository<Order>;

    constructor() {
        this.repository = AppDataSource.getRepository(Order);
    }

    async create(pizzas: IPizzaOrder[]): Promise<void> {
        const order: Order = this.repository.create({
            pizzas
        })

        await this.repository.save(order);
    }

    async list(): Promise<Order[]> {
        return await this.repository.find();
    }

    async findById(id: string): Promise<Order> {
        return await this.repository.findOne({
            where: {
                id
            }
        })
    }
}