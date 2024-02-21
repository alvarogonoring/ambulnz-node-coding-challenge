import {Column, CreateDateColumn, Entity, PrimaryColumn} from "typeorm";
import {v4} from 'uuid';

@Entity('pizzas')
export class Pizza {
    @PrimaryColumn({type: 'uuid'})
    id?: string;

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'decimal'})
    price: number;

    @Column({type: 'varchar'})
    ingredients: string[]

    @CreateDateColumn({type: 'timestamp'})
    create_at: Date

    constructor() {
        if (!this.id) this.id = v4();
    }
}