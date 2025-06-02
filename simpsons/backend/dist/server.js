"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const db_1 = require("./config/db");
const auth_1 = __importDefault(require("./routes/auth"));
const seasons_1 = __importDefault(require("./routes/seasons"));
const episodes_1 = __importDefault(require("./routes/episodes"));
const characters_1 = __importDefault(require("./routes/characters"));
const dossiers_1 = __importDefault(require("./routes/dossiers"));
const users_1 = __importDefault(require("./routes/users"));
const Character_1 = __importDefault(require("./models/Character"));
const app = (0, express_1.default)();
app.use((req, _res, next) => {
    console.log(`Requête reçue: [${req.method}] ${req.url}`);
    next();
});
app.get('/api', (_req, res) => {
    res.json({ status: 'OK', message: 'API is running' });
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
async function seedCharacters() {
    const count = await Character_1.default.countDocuments();
    if (count === 0) {
        console.log('Seeding characters from GitHub JSON…');
        const resp = await axios_1.default.get('https://raw.githubusercontent.com/colinxfleming/simpsons_data/main/simpsons_data.json');
        const raw = resp.data;
        if (!Array.isArray(raw)) {
            console.error('Format inattendu : pas un tableau');
            return;
        }
        const toInsert = raw.map(item => {
            var _a, _b, _c, _d;
            return ({
                name: (_a = item.name) !== null && _a !== void 0 ? _a : 'Unknown',
                imageUrl: (_c = (_b = item.imageUrl) !== null && _b !== void 0 ? _b : item.image) !== null && _c !== void 0 ? _c : '',
                description: (_d = item.description) !== null && _d !== void 0 ? _d : '',
            });
        });
        await Character_1.default.insertMany(toInsert);
        console.log(`Seeded ${toInsert.length} characters.`);
    }
}
(0, db_1.connectDB)()
    .then(async () => {
        console.log('MongoDB connected');
        try {
            await seedCharacters();
        }
        catch (err) {
            console.error('Seeding error:', err);
        }
        // Public routes
        app.use('/api/auth', auth_1.default);
        // Protected routes
        // app.use(authenticateJWT);
        app.use('/api/seasons', seasons_1.default);
        app.use('/api/episodes', episodes_1.default);
        app.use('/api/characters', characters_1.default);
        app.use('/api/dossiers', dossiers_1.default);
        app.use('/api/users', users_1.default);
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    });
