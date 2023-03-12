import { Note } from "../entity/Note";

// Provide resolver functions for your schema fields
export const noteResolver = {
  Query: {
    getNotesByBookId: async (_: any, args: any) => {
      return await Note.find();
    },
    getNoteById: async (_: any, args: any) => {
      return await Note.find();
    },
  },
  Mutation: {
    addNote: async (_: any, args: any) => {
      const { title, note, labels } = args;
      try {
        const newNote = Note.create({
          title,
          note,
          labels,
        });

        await newNote.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
