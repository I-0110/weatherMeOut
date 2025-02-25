import { Router } from 'express';
const router = Router();

import apiRoutes from './api/index.js';
import htmlRoutes from './htmlRoutes.js';

router.use('/api', apiRoutes);
// localhost:3000/
router.use('/', htmlRoutes);

export default router;
