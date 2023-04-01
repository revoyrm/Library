"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const book_1 = require("./book");
const character_1 = require("./character");
const chapter_1 = require("./chapter");
const setting_1 = require("./setting");
const note_1 = require("./note");
const label_1 = require("./label");
exports.typeDefs = [
    book_1.bookType,
    character_1.characterType,
    chapter_1.chapterType,
    setting_1.settingType,
    note_1.noteType,
    label_1.labelType,
];
