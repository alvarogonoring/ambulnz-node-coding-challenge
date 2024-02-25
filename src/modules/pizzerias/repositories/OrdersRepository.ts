import {In, Repository} from "typeorm";
import {AppDataSource} from "@/db";
import {IOrdersRepository} from "@/interfaces/IOrdersRepository";
import {Order} from "@/modules/pizzerias/entities/Order";
import {IPizzaOrder} from "@/interfaces/IPizzaOrder";
import {Pizza} from "@/modules/pizzerias/entities/Pizza";
import {AppError} from "@/errors/AppError";

export class OrdersRepository implements IOrdersRepository {
    private repository: Repository<Order>;
    private pizzasRepository: Repository<Pizza>

    constructor() {
        this.repository = AppDataSource.getRepository(Order);
        this.pizzasRepository = AppDataSource.getRepository(Pizza);
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
        const order = await this.repository
            .findOne({
                where: {
                    id
                }
            })

        if (!order) {
            throw new AppError('Order not found!')
        }

        const pizzas: Pizza[] = await this.pizzasRepository
            .find({
                where: {
                    id: In(order.pizzas.map(pizza => pizza.pizzaId))
                }
            })

        return {
            id: order.id,
            order_number: order.order_number,
            created_at: order.created_at,
            pizzas: pizzas.map(pizza => ({
                ...pizza,
                quantity: order.pizzas.find(pizzaOrder => pizzaOrder.pizzaId === pizza.id).quantity,
                ingredients: pizza.ingredients.split(',')
            })) as IPizzaOrder[]
        };
    }
}