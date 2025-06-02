"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const EpisodeSchema = new mongoose_1.Schema({
    season: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Season', required: true },
    number: { type: Number, required: true },
    title: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Episode', EpisodeSchema);
