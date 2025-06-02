import { Request, Response } from 'express';
import Character from '../models/Character';

export const getCharacters = async (_: Request, res: Response) => {
    const chars = await Character.find();
    res.json(chars);
};