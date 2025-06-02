"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDossiers = void 0;
const Dossier_1 = __importDefault(require("../models/Dossier"));
const getDossiers = async (_, res) => {
    const docs = await Dossier_1.default.find();
    res.json(docs);
};
exports.getDossiers = getDossiers;
