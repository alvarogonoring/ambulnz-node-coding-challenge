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
            .createQueryBuilder('order')
            .select([
                'id',
                'order_number',
                'created_at',
                'JSON_ARRAYAGG(JSON_OBJECT("pizzaId", json_extract(order.pizzas, "$[*].pizzaId"), "quantity", json_extract(order.pizzas, "$[*].quantity")) ) as pizzas',
            ])
            .where('order.id = :id', { id })
            .getRawOne();

        if (!order) {
            throw new AppError('Order not found!')
        }

        const pizzaIds = order.pizzas[0].pizzaId.map((pizza: any) => pizza);

        const pizzas: Pizza[] = await this.pizzasRepository
            .find({
                where: {
                    id: In(pizzaIds)
                }
            })

        return {
            id: order.id,
            order_number: order.order_number,
            created_at: order.created_at,
            pizzas: pizzas.map(pizza => ({
                ...pizza,
                ingredients: pizza.ingredients.split(',')
            })) as IPizzaOrder[]
        };
    }
}