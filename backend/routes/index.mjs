import { Router } from "express";
import productRouter from './product.mjs';
import userRouter from './user.mjs'

const router = Router();

router.use(productRouter);
router.use(userRouter)


export default router;