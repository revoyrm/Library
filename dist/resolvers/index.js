"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const book_1 = require("./book");
const character_1 = require("./character");
const chapter_1 = require("./chapter");
const setting_1 = require("./setting");
const note_1 = require("./note");
exports.resolvers = [
    book_1.bookResolver,
    character_1.characterResolver,
    chapter_1.chapterResolver,
    setting_1.settingResolver,
    note_1.noteResolver,
];
