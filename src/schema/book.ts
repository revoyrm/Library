export const bookType = `#graphql
  type Book {
    title: String
    author: String
    summary: String
  }
  
  type Query {
    getBooks: [Book]
  }

  type Mutation {
    addBook(title: String, author: String, summary: String! ): Boolean
  }
`;
