"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCharacters = void 0;
const Character_1 = __importDefault(require("../models/Character"));
const getCharacters = async (_, res) => {
    const chars = await Character_1.default.find();
    res.json(chars);
};
exports.getCharacters = getCharacters;
