export const bookType = `#graphql
  type Label {
    label: String
    id: ID
  }

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

  type Mutation {
    deleteBook(id: String): Boolean
  }

  type Mutation {
    updateBook(id: ID, title: String, author: String, summary: String, labelId: ID): Boolean
  }
`;
