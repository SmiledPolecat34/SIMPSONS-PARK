import { Request, Response } from "express";
import Episode from "../models/Episode";

export const getEpisodes = async (_: Request, res: Response) => {
    const eps = await Episode.find();
    res.json(eps);
};

export const getEpisodesBySeason = async (req: Request, res: Response) => {
    const season = parseInt(req.params.season, 10);
    
    if (isNaN(season)) return res.status(400).json({ error: "Invalid season number" });

    const eps = await Episode.find({ season });
    res.json(eps);
};