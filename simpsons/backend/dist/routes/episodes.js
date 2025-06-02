import { Router } from 'express';
import { getEpisodes } from '../controllers/episodeController';

const router = Router();
router.get('/', getEpisodes);

export default router;