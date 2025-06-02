import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import axios from 'axios';

import { connectDB } from './config/db';
import authRoutes from './routes/auth';
import seasonsRoutes from './routes/seasons';
import episodesRoutes from './routes/episodes';
import charactersRoutes from './routes/characters';
import dossiersRoutes from './routes/dossiers';
import usersRoutes from './routes/users';
import { authenticateJWT } from './middlewares/authenticateJWT';
import Character from './models/Character';

const app = express();

app.use((req, _res, next) => {
    console.log(`Requête reçue: [${req.method}] ${req.url}`);
    next();
});

app.get('/api', (_req, res) => {
    res.json({ status: 'OK', message: 'API is running' });
});

app.use(cors());
app.use(express.json());

async function seedCharacters() {
    const count = await Character.countDocuments();
    if (count === 0) {
        console.log('Seeding characters from GitHub JSON…');
        const resp = await axios.get(
            'https://raw.githubusercontent.com/colinxfleming/simpsons_data/main/simpsons_data.json'
        );
        const raw = resp.data as any[];
        if (!Array.isArray(raw)) {
            console.error('Format inattendu : pas un tableau');
            return;
        }
        const toInsert = raw.map(item => ({
            name: item.name ?? 'Unknown',
            imageUrl: item.imageUrl ?? item.image ?? '',
            description: item.description ?? '',
        }));
        await Character.insertMany(toInsert);
        console.log(`Seeded ${toInsert.length} characters.`);
    }
}

connectDB()
    .then(async () => {
        console.log('Server runned, & connected');
        try {
            await seedCharacters();
        } catch (err) {
            console.error('Seeding error:', err);
        }

        app.use('/api/auth', authRoutes);

        // app.use(authenticateJWT);

        app.use('/api/seasons', seasonsRoutes);
        app.use('/api/episodes', episodesRoutes);
        app.use('/api/characters', charactersRoutes);
        app.use('/api/dossiers', dossiersRoutes);
        app.use('/api/users', usersRoutes);

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () =>
            console.log(`Server running on port ${PORT}`)
        );
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    });
