"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteResolver = void 0;
const Label_1 = require("../entity/Label");
const Note_1 = require("../entity/Note");
// Provide resolver functions for your schema fields
exports.noteResolver = {
    Query: {
        getNotesByBookId: async (_, args) => {
            return await Note_1.Note.find();
        },
        getNoteById: async (_, args) => {
            return await Note_1.Note.find();
        },
    },
    Mutation: {
        addNote: async (_, args) => {
            const { title, note, labels } = args;
            try {
                let allLabels = [];
                await labels?.forEach(async ({ id, label }) => {
                    const existingLabel = await Label_1.Label.findOne(id);
                    if (existingLabel) {
                        allLabels.push(existingLabel);
                    }
                    else {
                        const newLabel = await Label_1.Label.create({
                            label,
                        });
                        allLabels.push(newLabel);
                    }
                });
                const newNote = Note_1.Note.create({
                    title,
                    note,
                    labels: allLabels,
                });
                await newNote.save();
                return true;
            }
            catch (error) {
                return false;
            }
        },
    },
};
