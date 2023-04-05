export const bookType = `#graphql
  type Book {
    id: ID
    title: String
    author: String
    summary: String
    label: Label
    allLabels: [Label]
    characters: [Character]
    chapters: [Chapter]
    settings: [Setting]
  }
  
  type Query {
    getBooks: [Book]
  }

  type Mutation {
    createBook(title: String, author: String, summary: String ): Book
  }
`;
