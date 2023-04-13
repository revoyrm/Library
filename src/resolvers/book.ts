import { Book } from "../entity/Book";
import { Label } from "../entity/Label";
import { AppDataSource } from "../data-source";
import { In } from "typeorm";

export const bookResolver = {
  Query: {
    getBooks: async (_: any, args: any) => {
      const books = await Book.find({
        relations: {
          allLabels: true,
          label: true,
          characters: { label: true },
          chapters: { label: true },
          settings: { label: true },
        },
      });

      return books;
    },
    getBooksByLabelIds: async (_: any, args: any) => {
      const { labelIds } = args;
      return await Book.find({
        where: { label: { id: In(labelIds) } },
        relations: {
          label: true,
        },
      });
    },
    getBookById: async (_: any, args: any) => {
      const { id } = args;
      return await Book.findOne({
        where: { id },
        relations: {
          label: true,
          characters: { label: true },
          chapters: { label: true },
          settings: { label: true },
        },
      });
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
        const createdBook = await AppDataSource.manager.save(book);

        return createdBook;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    deleteBook: async (_: any, args: any) => {
      const { id } = args;
      try {
        const book = await Book.findOneBy({ id });
        if (book) {
          await Book.remove(book);
        }

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    updateBook: async (_: any, args: any) => {
      const { id, title, author, summary, labelId } = args;
      try {
        Book.update({ id }, { title, author, summary });

        Label.update({ id: labelId }, { label: title });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
