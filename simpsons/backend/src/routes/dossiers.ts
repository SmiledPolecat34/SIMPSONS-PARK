import { Router } from 'express';
import { getDossiers } from '../controllers/dossierController';
const router = Router();
router.get('/', getDossiers);
export default router;