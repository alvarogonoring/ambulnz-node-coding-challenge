import {Router} from "express";
import {pizzasRoutes} from "@/routes/pizzas.routes";
import {ordersRoutes} from "@/routes/orders.routes";

export const router = Router();

router.use('/pizzas', pizzasRoutes);
router.use('/orders', ordersRoutes);