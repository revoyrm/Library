import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book";
import { Chapter } from "../entity/Chapter";
import { Label } from "../entity/Label";

// Provide resolver functions for your schema fields
export const chapterResolver = {
  Query: {
    getChaptersByBookId: async (_: any, args: any) => {
      return await Chapter.find();
    },
    getChapterById: async (_: any, args: any) => {
      const { id } = args;
      return await Chapter.findOne({
        where: { id },
        relations: {
          label: true,
        },
      });
    },
  },
  Mutation: {
    createChapter: async (_: any, args: any) => {
      const { bookId, name, number, description } = args;
      try {
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

        const chapter = new Chapter();
        chapter.description = description;
        chapter.name = name;
        chapter.number = number;
        chapter.label = label;
        chapter.book = book;
        const createdChapter = await AppDataSource.manager.save(chapter);

        console.log(createdChapter);

        return createdChapter;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    deleteChapter: async (_: any, args: any) => {
      const { id } = args;
      try {
        const chapter = await Chapter.findOneBy({ id });
        const label = await Label.findOneBy({ id: chapter.label.id });
        if (chapter) {
          await Chapter.remove(chapter);
        }

        if (label) {
          console.log("Found label", label.label);
          await Label.remove(label);
          console.log("REMOVED LABEL");
        }

        console.log(chapter);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    updateChapter: async (_: any, args: any) => {
      const { bookId, id, name, number, description, labelId } = args;
      try {
        const book = await Book.findOne({
          where: { id: bookId },
          relations: {
            chapters: true,
            allLabels: true,
          },
        });

        if (!book) return null;

        await Chapter.update({ id }, { name, number, description });

        await Label.update({ id: labelId }, { label: name });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
