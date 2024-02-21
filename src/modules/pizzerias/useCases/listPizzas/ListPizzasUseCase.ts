import {inject, injectable} from "tsyringe";
import {IPizzasRepository} from "@/interfaces/IPizzasRepository";
import {Pizza} from "@/modules/pizzerias/entities/Pizza";

@injectable()
export class ListPizzasUseCase {
    constructor(
        @inject('PizzasRepository')
        private pizzasRepository: IPizzasRepository
    ) {}

    async execute(): Promise<Pizza[]> {
        return await this.pizzasRepository.list();
    }
}