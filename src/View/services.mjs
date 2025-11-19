import express from 'express';
import * as ctrl from '../Controller/services.mjs';
import { authenticate } from '../Middleware/auth.mjs';
const router = express.Router();

router.route('/')
  .get(ctrl.getAll)
  .post(authenticate,ctrl.create)
  .delete(authenticate,ctrl.removeAll);

router.route('/:id')
  .get(ctrl.getById)
  .put(authenticate,ctrl.update)
  .delete(authenticate, ctrl.removeOne);

export default router;