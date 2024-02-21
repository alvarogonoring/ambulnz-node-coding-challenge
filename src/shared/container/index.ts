import {container} from "tsyringe";
import {IPizzasRepository} from "@/interfaces/IPizzasRepository";
import {PizzasRepository} from "@/modules/pizzerias/repositories/PizzasRepository";

container.registerSingleton<IPizzasRepository>('PizzasRepository', PizzasRepository);