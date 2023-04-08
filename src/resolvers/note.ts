import { In } from "typeorm";
import { Label } from "../entity/Label";
import { Note } from "../entity/Note";
import { AppDataSource } from "../data-source";

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
      const { title, note, labelIds } = args;
      try {
        console.log("CreateNote");
        const labels = await Label.find({ where: { id: In(labelIds) } });
        console.log("found labels", JSON.stringify(labels, null, 2));

        const newNote = new Note();
        newNote.title = title;
        newNote.note = note;
        newNote.labels = labels;
        console.log({ newNote });
        const createdNote = await AppDataSource.manager.save(newNote);
        console.log({ createdNote });

        return createdNote;
      } catch (error) {
        console.error(error);
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
      const { id, title, note, labelIds } = args;
      try {
        const labels = await Label.find({ where: { id: In(labelIds) } });

        await Note.save({ id, title, note, labels });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
