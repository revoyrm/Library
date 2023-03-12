import { Chapter } from "../entity/Chapter";

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
      const { name, description, labels } = args;
      try {
        const chapter = Chapter.create({
          name,
          description,
          labels,
        });

        await chapter.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
