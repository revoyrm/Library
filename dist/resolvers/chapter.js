"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterResolver = void 0;
const Chapter_1 = require("../entity/Chapter");
const Label_1 = require("../entity/Label");
// Provide resolver functions for your schema fields
exports.chapterResolver = {
    Query: {
        getChaptersByBookId: async (_, args) => {
            return await Chapter_1.Chapter.find();
        },
        getChapterById: async (_, args) => {
            return await Chapter_1.Chapter.find();
        },
    },
    Mutation: {
        addChapter: async (_, args) => {
            const { name, description, number } = args;
            try {
                const label = Label_1.Label.create({
                    label: name,
                });
                const chapter = Chapter_1.Chapter.create({
                    name,
                    description,
                    number,
                    label,
                });
                await chapter.save();
                return true;
            }
            catch (error) {
                return false;
            }
        },
    },
};
