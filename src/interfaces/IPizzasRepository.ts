import {Pizza} from "@/modules/pizzerias/entities/Pizza";
import {CreatePizzaDto} from "@/interfaces/dto/CreatePizza.dto";

export interface IPizzasRepository {
    list: () => Promise<Pizza[]>;
    create: ({ingredients, name, price}: CreatePizzaDto) => Promise<void>;
    findByName: (name: string) => Promise<Pizza>;
}