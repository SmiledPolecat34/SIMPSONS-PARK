"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = void 0;
const User_1 = __importDefault(require("../models/User"));
const updateUser = async (req, res) => {
    const { email, name, role } = req.body;
    const userId = req.params.id;
    try {
        const user = await User_1.default.findById(userId);
        if (!user) {
            res.status(404).json({ error: 'Utilisateur non trouvé' });
            return;
        }
        user.email = email !== null && email !== void 0 ? email : user.email;
        user.name = name !== null && name !== void 0 ? name : user.name;
        user.role = role !== null && role !== void 0 ? role : user.role;
        await user.save();
        res.status(200).json({ message: 'Utilisateur mis à jour' });
    }
    catch (error) {
        console.error('Erreur updateUser:', error);
        res.status(500).json({ error: 'Erreur serveur' });
    }
};
exports.updateUser = updateUser;
