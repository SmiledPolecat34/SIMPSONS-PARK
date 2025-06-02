"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const users = await User_1.default.find().select('_id email name role');
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});
router.put('/:id', async (req, res) => {
    console.log('Requête PUT reçue:', req.body);
    const { email, name, role } = req.body;
    if (!email)
        return res.status(400).json({ message: 'Email requis' });
    const allowedRoles = ['user', 'admin'];
    if (role && !allowedRoles.includes(role)) {
        return res.status(400).json({ message: 'Role invalide' });
    }
    try {
        const updatedUser = await User_1.default.findByIdAndUpdate(req.params.id, { email, ...(name && { name }), ...(role && { role }) }, { new: true }).select('_id email name role');
        if (!updatedUser)
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        res.json(updatedUser);
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await User_1.default.findByIdAndDelete(req.params.id);
        if (!deleted)
            return res.status(404).json({ message: 'Utilisateur introuvable' });
        res.json({ message: 'Utilisateur supprimé' });
    }
    catch (err) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});
exports.default = router;
