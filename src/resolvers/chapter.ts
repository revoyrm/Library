import { Chapter } from "../entity/Chapter";
import { Label } from "../entity/Label";

// Provide resolver functions for your schema fields
export const chapterResolver = {
  Query: {
    getChaptersByBookId: async (_: any, args: any) => {
      return await Chapter.find();
    },
    getChapterById: async (_: any, args: any) => {
      return await Chapter.find();
    },
  },
  Mutation: {
    addChapter: async (_: any, args: any) => {
      const { name, description, number } = args;
      try {
        const label = Label.create({
          label: name,
        });

        const chapter = Chapter.create({
          name,
          description,
          number,
          label,
        });

        await chapter.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
