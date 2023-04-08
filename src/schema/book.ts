export const bookType = `#graphql
  type Label {
    label: String
    id: ID
  }

  type Character {
    id: ID
    name: String
    description: String
    label: Label
  }

  type Chapter {
    id: ID
    name: String
    description: String
    number: Int
    label: Label
  }

  type Setting {
    id: ID
    name: String
    description: String
    label: Label
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
  
  type Query {
    getBookById(id: ID): Book
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
