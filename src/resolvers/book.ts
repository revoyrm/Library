import { Book } from "../entity/Book";
import { Label } from "../entity/Label";
import { AppDataSource } from "../data-source";

export const bookResolver = {
  Query: {
    getBooks: async (_: any, args: any) => {
      return await Book.find();
    },
  },
  Mutation: {
    createBook: async (_: any, args: any) => {
      const { summary, title, author } = args;
      try {
        const label = new Label();
        label.label = title;
        await AppDataSource.manager.save(label);

        const book = new Book();
        book.summary = summary;
        book.title = title;
        book.author = author;
        book.label = label;
        book.allLabels = [label];
        await AppDataSource.manager.save(book);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
