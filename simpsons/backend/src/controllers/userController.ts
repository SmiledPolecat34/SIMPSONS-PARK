import { Request, Response } from 'express';
import User from '../models/User';

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { email, name, role } = req.body;
  const userId = req.params.id;

  try {
    const user = await User.findById(userId);
    if (!user) {
      res.status(404).json({ error: 'Utilisateur non trouvé' });
      return;
    }

    user.email = email ?? user.email;
    user.name = name ?? user.name;
    user.role = role ?? user.role;

    await user.save();

    res.status(200).json({ message: 'Utilisateur mis à jour' });
  } catch (error) {
    console.error('Erreur updateUser:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
};
