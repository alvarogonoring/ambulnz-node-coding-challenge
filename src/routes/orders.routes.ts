import {Router} from "express";
import {CreateOrderController} from "@/modules/pizzerias/useCases/createOrder/CreateOrderController";
import {ListOrdersController} from "@/modules/pizzerias/useCases/listOrders/ListOrdersController";

export const ordersRoutes = Router();

const createOrderController = new CreateOrderController();
const listOrdersController = new ListOrdersController();

ordersRoutes.post('/', createOrderController.handle);

ordersRoutes.get('/', listOrdersController.handle);