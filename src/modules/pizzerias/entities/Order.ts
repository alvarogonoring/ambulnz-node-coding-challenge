import {Column, Entity, Generated, PrimaryColumn} from "typeorm";
import {IPizzaOrder} from "@/interfaces/IPizzaOrder";
import {v4} from "uuid";

@Entity('orders')
export class Order {
    @PrimaryColumn({type: 'varchar'})
    id?: string;

    @Column({type: 'int'})
    @Generated('increment')
    order_number?: number;

    @Column({type: 'json'})
    pizzas: IPizzaOrder[];

    constructor() {
        if (!this.id) this.id = v4();
    }
}