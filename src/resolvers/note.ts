import { In } from "typeorm";
import { Label } from "../entity/Label";
import { Note } from "../entity/Note";

// Provide resolver functions for your schema fields
export const noteResolver = {
  Query: {
    getNotesByLabelIds: async (_: any, args: any) => {
      const { labelIds } = args;
      return await Note.find({
        where: { labels: { id: In(labelIds) } },
        relations: { labels: true },
      });
    },
    getNoteById: async (_: any, args: any) => {
      const { id } = args;
      return await Note.findOne({ where: { id }, relations: { labels: true } });
    },
  },
  Mutation: {
    createNote: async (_: any, args: any) => {
      const { title, note, labels } = args;
      try {
        let allLabels: Label[] = [];

        await labels?.forEach(async ({ id }) => {
          const existingLabel = await Label.findOne({
            where: id,
            relations: {
              label: true,
            },
          });

          if (existingLabel) {
            allLabels.push(existingLabel);
          }
        });

        const newNote = Note.create({
          title,
          note,
          labels: allLabels,
        });

        await newNote.save();

        return newNote;
      } catch (error) {
        return null;
      }
    },
    deleteNote: async (_: any, args: any) => {
      const { id } = args;
      try {
        const note = await Note.findOneBy({ id });
        if (note) {
          await Note.remove(note);
        }

        console.log(note);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    updateNote: async (_: any, args: any) => {
      const { id, title, note, labels } = args;
      try {
        let allLabels: Label[] = [];

        await labels?.forEach(async ({ id }) => {
          const existingLabel = await Label.findOne({
            where: id,
            relations: {
              label: true,
            },
          });

          if (existingLabel) {
            allLabels.push(existingLabel);
          }
        });

        Note.update({ id }, { title, note, labels: allLabels });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
