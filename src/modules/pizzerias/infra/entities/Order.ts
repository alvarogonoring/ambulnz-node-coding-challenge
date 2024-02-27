import {Column, CreateDateColumn, Entity, Generated, PrimaryColumn} from "typeorm";
import {IPizzaOrder} from "@/interfaces/IPizzaOrder";
import {v4} from "uuid";
import {Pizza} from "@/modules/pizzerias/infra/entities/Pizza";

@Entity('orders')
export class Order {
    @PrimaryColumn({type: 'varchar'})
    id?: string;

    @Column({type: 'int'})
    @Generated('increment')
    order_number?: number;

    @Column({type: 'json'})
    pizzas: IPizzaOrder[];

    @CreateDateColumn({type: 'timestamp'})
    created_at: Date;

    constructor() {
        if (!this.id) this.id = v4();
    }
}