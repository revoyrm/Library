import { Character } from "../entity/Character";
import { Label } from "../entity/Label";

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
      const { name, description } = args;
      try {
        const label = Label.create({
          label: name,
        });

        const character = Character.create({
          name,
          description,
          label,
        });

        await character.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
