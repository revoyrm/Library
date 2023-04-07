"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characterResolver = void 0;
const Character_1 = require("../entity/Character");
const Label_1 = require("../entity/Label");
// Provide resolver functions for your schema fields
exports.characterResolver = {
    Query: {
        getCharactersByBookId: async (_, args) => {
            return await Character_1.Character.find();
        },
        getCharacterById: async (_, args) => {
            return await Character_1.Character.find();
        },
    },
    Mutation: {
        addCharacter: async (_, args) => {
            const { name, description } = args;
            try {
                const label = Label_1.Label.create({
                    label: name,
                });
                const character = Character_1.Character.create({
                    name,
                    description,
                    label,
                });
                await character.save();
                return true;
            }
            catch (error) {
                return false;
            }
        },
    },
};
