import {container} from "tsyringe";
import {IPizzasRepository} from "@/interfaces/IPizzasRepository";
import {PizzasRepository} from "@/modules/pizzerias/repositories/PizzasRepository";
import {IOrdersRepository} from "@/interfaces/IOrdersRepository";
import {OrdersRepository} from "@/modules/pizzerias/repositories/OrdersRepository";

container.registerSingleton<IPizzasRepository>('PizzasRepository', PizzasRepository);
container.registerSingleton<IOrdersRepository>('OrdersRepository', OrdersRepository);