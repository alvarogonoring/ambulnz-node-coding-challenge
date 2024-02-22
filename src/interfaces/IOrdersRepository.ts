import {Order} from "@/modules/pizzerias/entities/Order";
import {IPizzaOrder} from "@/interfaces/IPizzaOrder";

export interface IOrdersRepository {
    create: (pizzas: IPizzaOrder[]) => Promise<void>;
    list: () => Promise<Order[]>;
    findById: (id: string) => Promise<Order>;
}