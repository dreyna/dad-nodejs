import { Router } from 'express'
const router = Router();

import * as rolesCtrl from '../controllers/rol.controller'

router.get('/', rolesCtrl.getRoles);

export default router;