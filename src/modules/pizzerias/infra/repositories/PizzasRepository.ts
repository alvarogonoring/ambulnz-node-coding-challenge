import {IPizzasRepository} from "@/interfaces/IPizzasRepository";
import {Repository} from "typeorm";
import {Pizza} from "@/modules/pizzerias/infra/entities/Pizza";
import {AppDataSource} from "shared/infra/typeorm";
import {CreatePizzaDto} from "@/interfaces/dto/CreatePizza.dto";

export class PizzasRepository implements IPizzasRepository{
    private repository: Repository<Pizza>;

    constructor() {
        this.repository = AppDataSource.getRepository(Pizza);
    }

    async create({ ingredients, name, price }: CreatePizzaDto): Promise<void> {
        const pizza: Pizza = this.repository.create({
            ingredients,
            name,
            price
        })

        await this.repository.save(pizza);
    }

    async list(): Promise<Pizza[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Pizza> {
        return await this.repository.findOne({
            where: {
                name
            }
        })
    }
}