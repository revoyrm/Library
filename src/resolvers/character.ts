import { Character } from "../entity/Character";

// Provide resolver functions for your schema fields
export const characterResolver = {
  Query: {
    getCharactersByBookId: async (_: any, args: any) => {
      return await Character.find();
    },
    getCharacterById: async (_: any, args: any) => {
      return await Character.find();
    },
  },
  Mutation: {
    addCharacter: async (_: any, args: any) => {
      const { name, description, labels } = args;
      try {
        const character = Character.create({
          name,
          description,
          labels,
        });

        await character.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
