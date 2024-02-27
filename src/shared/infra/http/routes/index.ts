import {Router} from "express";
import {pizzasRoutes} from "@/shared/infra/http/routes/pizzas.routes";
import {ordersRoutes} from "@/shared/infra/http/routes/orders.routes";

export const router = Router();

router.use('/pizzas', pizzasRoutes);
router.use('/orders', ordersRoutes);