import { Book } from "../entity/Book";
import { Label } from "../entity/Label";

// Provide resolver functions for your schema fields
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
        const label = Label.create({
          label: title,
        });

        const book = Book.create({
          summary,
          title,
          author,
          label,
          allLabels: [label],
        });

        await book.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};
