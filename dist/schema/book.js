import { gql } from "@apollo/server";
export const bookType = gql `
  type Query {
    getBooks(): [Book]
  }

  type mutation {
    addBook(title: String, author: String, summary: String! ): Boolean
  }
`;
