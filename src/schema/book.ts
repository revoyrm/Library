export const bookType = `#graphql
  type Book {
    title: String
    author: String
    summary: String
    label: Label
  }
  
  type Query {
    getBooks: [Book]
  }

  type Mutation {
    createBook(title: String, author: String, summary: String ): Boolean
  }
`;
