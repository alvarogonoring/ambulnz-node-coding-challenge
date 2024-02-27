import {inject, injectable} from "tsyringe";
import {IPizzasRepository} from "@/interfaces/IPizzasRepository";
import {AppError} from "@/shared/errors/AppError";

interface Request {
    name: string;
    price: number;
    ingredients: string[];
}

@injectable()
export class CreatePizzaUseCase {
    constructor(
        @inject('PizzasRepository')
        private pizzasRepository: IPizzasRepository
    ) {}

    async execute({ name, price, ingredients }: Request): Promise<void> {
        const pizzaAlreadyExists = await this.pizzasRepository.findByName(name);

        if (pizzaAlreadyExists) {
            throw new AppError('Pizza already exists!');
        }

        await this.pizzasRepository.create({
            name,
            price,
            ingredients
        })
    }
}