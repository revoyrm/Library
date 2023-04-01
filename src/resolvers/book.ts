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
    addBook: async (_: any, args: any) => {
      const { summary, title, author } = args;
      try {
        //todo label needs reference to book
        //todo every other thing needs to update book allLabels
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
