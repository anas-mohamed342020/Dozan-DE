import Router from 'express';
import { auth, roles } from '../../middleware/auth.js';
import validation from '../../middleware/validation.js';
import { asyncErrorHandler } from '../../utils/errorHandeling.js';
import * as order from './order.js';
import * as Val from './order.validation.js';
const router = Router();

router.post('/create-order',
    validation(Val.createOrderVal),
    asyncErrorHandler(auth([roles.user])),
    asyncErrorHandler(order.createOrder)
)

router.patch('/update-order/:_id',
    validation(Val.updateOrderVal),
    asyncErrorHandler(auth([roles.user])),
    asyncErrorHandler(order.updateProduct)
)

router.delete('/delete-order/:_id',
    validation(Val.deleteOrderVal),
    asyncErrorHandler(auth([roles.user])),
    asyncErrorHandler(order.deleteProduct)
)


router.get('/mark-as-delivered/:_id',
    validation(Val.deleteOrderVal),
    asyncErrorHandler(auth([roles.admin, roles.superAdmin])),
    asyncErrorHandler(order.markAsDelivered)
)

router.get('/get-orders',
    validation(Val.getOrderSchema),
    asyncErrorHandler(auth([roles.admin, roles.superAdmin])),
    asyncErrorHandler(order.getOrders)
)

export default router