import express from 'express';
const router = express.Router();
import { home } from '../Controller/index.mjs';

router.get('/', home);

export default router;