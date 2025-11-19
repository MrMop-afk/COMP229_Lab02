import express from 'express';
import * as ctrl from '../Controller/contacts.mjs';
import { authenticate } from '../Middleware/auth.mjs';

const router = express.Router();

router.route('/')
  .get(ctrl.getAll)
  .post(ctrl.create)
  .delete(ctrl.removeAll);

router.route('/:id')
  .get(ctrl.getById)
  .put(ctrl.update)
  .delete(ctrl.removeOne);

export default router;