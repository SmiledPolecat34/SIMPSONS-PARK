"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeasons = void 0;
const Season_1 = __importDefault(require("../models/Season"));
const getSeasons = async (_, res) => {
    const seasons = await Season_1.default.find();
    res.json(seasons);
};
exports.getSeasons = getSeasons;
