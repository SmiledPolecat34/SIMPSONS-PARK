import { Router } from 'express';
import User from '../models/User';
import { authenticateJWT } from '../middlewares/authenticateJWT';

const router = Router();

router.get('/', async (_req, res) => { 
  try {
    const users = await User.find().select('_id email name role');
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.put('/:id', async (req, res) => {
  console.log('Requête PUT reçue:', req.body);

  const { email, name, role } = req.body;

  if (!email) return res.status(400).json({ message: 'Email requis' });

  const allowedRoles = ['user', 'admin'];
  if (role && !allowedRoles.includes(role)) {
    return res.status(400).json({ message: 'Role invalide' });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { email, ...(name && { name }), ...(role && { role }) },
      { new: true }
    ).select('_id email name role');

    if (!updatedUser) return res.status(404).json({ message: 'Utilisateur introuvable' });

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Utilisateur introuvable' });

    res.json({ message: 'Utilisateur supprimé' });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
});

export default router;
