import { Request, Response } from 'express';
import Dossier from '../models/Dossier';

export const getDossiers = async (_: Request, res: Response) => {
    const docs = await Dossier.find();
    res.json(docs);
};