"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DossierSchema = new mongoose_1.Schema({
    character: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Character', required: true },
    notes: { type: String, default: '' }
});
exports.default = (0, mongoose_1.model)('Dossier', DossierSchema);
