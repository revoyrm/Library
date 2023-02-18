import { Book } from "../entity/Book";
// Provide resolver functions for your schema fields
export const bookResolver = {
    Query: {
        getBooks: async (_, args) => {
            return await Book.find();
        },
    },
    Mutation: {
        addBook: async (_, args) => {
            const { summary, title, author } = args;
            try {
                const book = Book.create({
                    summary,
                    title,
                    author,
                });
                await book.save();
                return true;
            }
            catch (error) {
                return false;
            }
        },
    },
};
