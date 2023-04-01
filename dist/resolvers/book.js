"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookResolver = void 0;
const Book_1 = require("../entity/Book");
const Label_1 = require("../entity/Label");
// Provide resolver functions for your schema fields
exports.bookResolver = {
    Query: {
        getBooks: async (_, args) => {
            return await Book_1.Book.find();
        },
    },
    Mutation: {
        addBook: async (_, args) => {
            const { summary, title, author } = args;
            try {
                //todo label needs reference to book
                //todo every other thing needs to update book allLabels
                const label = Label_1.Label.create({
                    label: title,
                });
                const book = Book_1.Book.create({
                    summary,
                    title,
                    author,
                    label,
                    allLabels: [label],
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
