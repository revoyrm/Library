import { Label } from "../entity/Label";
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
        let allLabels: Label[] = [];
        await labels?.forEach(async ({ id, label }) => {
          const existingLabel = await Label.findOne(id);
          if (existingLabel) {
            allLabels.push(existingLabel);
          } else {
            const newLabel = await Label.create({
              label,
            });
            allLabels.push(newLabel);
          }
        });

        const newNote = Note.create({
          title,
          note,
          labels: allLabels,
        });

        await newNote.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
