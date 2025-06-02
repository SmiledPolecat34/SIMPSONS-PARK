import { Router } from 'express';
import { getEpisodes, getEpisodesBySeason } from '../controllers/episodeController';

const router = Router();
router.get('/', getEpisodes);
router.get('/season/:season', getEpisodesBySeason);

export default router;