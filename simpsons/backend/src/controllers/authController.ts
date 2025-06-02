import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User';

const JWT_SECRET = process.env.JWT_SECRET!;

export const register = async (req: Request, res: Response) => {
    try {
        const { email, password, name } = req.body as { email: string; password: string; name: string };
        if (!email || !password || !name) {
            return res.status(400).json({ message: 'Email et mot de passe requis.' });
        }

        const exists = await User.findOne({ email });
        if (exists) {
            return res.status(409).json({ message: 'Utilisateur déjà enregistré.' });
        }

        const hash = await bcrypt.hash(password, 10);

        const user = new User({ email, password: hash, name, role: 'user' });
        await user.save();

        return res.status(201).json({ message: 'Utilisateur créé avec succès.' });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erreur serveur.' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as { email: string; password: string };
        if (!email || !password) {
            return res.status(400).json({ message: 'Email et mot de passe requis.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }

        const ok = await bcrypt.compare(password, user.password);
        if (!ok) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }

        const token = jwt.sign(
            { userId: user._id, role: user.role }, 
            JWT_SECRET, 
            { expiresIn: '7d' }
        );

        return res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                name: user.name,
            },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erreur serveur.' });
    }
};
