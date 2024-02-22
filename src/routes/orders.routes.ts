import {Router} from "express";
import {CreateOrderController} from "@/modules/pizzerias/useCases/createOrder/CreateOrderController";
import {ListOrdersController} from "@/modules/pizzerias/useCases/listOrders/ListOrdersController";
import {OrderDetailsController} from "@/modules/pizzerias/useCases/orderDetails/OrderDetailsController";

export const ordersRoutes = Router();

const createOrderController = new CreateOrderController();
const listOrdersController = new ListOrdersController();
const orderDetailsController = new OrderDetailsController();

ordersRoutes.post('/', createOrderController.handle);

ordersRoutes.get('/', listOrdersController.handle);

ordersRoutes.get('/:id', orderDetailsController.handle);