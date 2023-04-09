import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book";
import { Character } from "../entity/Character";
import { Label } from "../entity/Label";

// Provide resolver functions for your schema fields
export const characterResolver = {
  Query: {
    getCharactersByBookId: async (_: any, args: any) => {
      return await Character.find();
    },
    getCharacterById: async (_: any, args: any) => {
      const { id } = args;
      return await Character.findOne({
        where: { id },
        relations: {
          book: true,
          label: true,
        },
      });
    },
  },
  Mutation: {
    createCharacter: async (_: any, args: any) => {
      const { bookId, name, age, description } = args;
      try {
        console.log({ bookId, name, age, description });
        const book = await Book.findOne({
          where: { id: bookId },
          relations: {
            chapters: true,
          },
        });

        if (!book) return null;
        const label = new Label();
        label.label = name;
        await AppDataSource.manager.save(label);

        const character = new Character();
        character.description = description;
        character.name = name;
        character.age = age;
        character.label = label;
        character.book = book;
        const createdCharacter = await AppDataSource.manager.save(character);

        console.log(createdCharacter);

        return createdCharacter;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    deleteCharacter: async (_: any, args: any) => {
      const { id } = args;
      try {
        const character = await Character.findOneBy({ id });
        // const label = await Label.findOneBy({ id: character.label.id });
        if (character) {
          await Character.remove(character);
        }

        // if (label) {
        //   console.log("Found label", label.label);
        //   await Label.remove(label);
        //   console.log("REMOVED LABEL");
        // }

        console.log(character);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    updateCharacter: async (_: any, args: any) => {
      const { id, name, age, description, labelId } = args;
      try {
        Character.update({ id }, { name, age, description });

        Label.update({ id: labelId }, { label: name });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
