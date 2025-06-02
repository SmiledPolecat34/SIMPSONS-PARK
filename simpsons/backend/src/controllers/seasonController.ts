import { Request, Response } from 'express';
import Season from '../models/Season';

export const getSeasons = async (_: Request, res: Response) => {
    const seasons = await Season.find();
    res.json(seasons);
};