# Simpsons Park Mobile App (Android)

Projet 1 – Application Android Flutter avec backend NodeJS & MongoDB

**Technos**: Flutter/Dart, Node.js, Express, MongoDB, Mongoose, JWT Auth

## Installation

### Backend
1. `cd backend\src`
2. Copier `.env.example` en `.env`, renseigner `MONGODB_URI` et `JWT_SECRET`
3. `npm install`
4. Taper la commande : mongosh "mongodb://localhost:27017/simpsonspark" seed.js
5. `npm run dev`


### Frontend
1. `flutter pub get`
2. Configurer `app_config.dart` avec l’URL de l’API
3. `flutter run --target-platform android-arm64` | flutter run -d chrome` (pour le web)

## Structure
- `lib/models`: classes de données
- `lib/services`: services d’API (authent, données Simpsons)
- `lib/views`: écrans de l’app
- `lib/theme`: styles révolutionnaires
- `backend`: API REST sécurisée JWT + MongoDB