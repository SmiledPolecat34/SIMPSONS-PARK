"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEpisodes = void 0;
const Episode_1 = __importDefault(require("../models/Episode"));
const getEpisodes = async (_, res) => {
    const eps = await Episode_1.default.find();
    res.json(eps);
};
exports.getEpisodes = getEpisodes;
