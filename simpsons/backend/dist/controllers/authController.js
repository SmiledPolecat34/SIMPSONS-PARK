"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const JWT_SECRET = process.env.JWT_SECRET;
const register = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email et mot de passe requis.' });
        }
        const exists = await User_1.default.findOne({ email });
        if (exists) {
            return res.status(409).json({ message: 'Utilisateur déjà enregistré.' });
        }
        const hash = await bcrypt_1.default.hash(password, 10);
        const user = new User_1.default({ email, password: hash });
        await user.save();
        return res.status(201).json({ message: 'Utilisateur créé avec succès.' });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erreur serveur.' });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: 'Email et mot de passe requis.' });
        }
        const user = await User_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }
        const ok = await bcrypt_1.default.compare(password, user.password);
        if (!ok) {
            return res.status(401).json({ message: 'Identifiants invalides.' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
        return res.json({
            token,
            user: {
                id: user._id,
                email: user.email,
                role: user.role,
                name: user.name,
            },
        });
    }
    catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Erreur serveur.' });
    }
};
exports.login = login;
