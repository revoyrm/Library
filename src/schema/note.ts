export const noteType = `#graphql
  type Note {
    title: String
    note: String
    labels: [String]
  }
  
  type Query {
    getNotesForBookId(bookId: String): [Note]
  }

  type Query {
    getNoteById(id: String): Note
  }

  type Mutation {
    addNote(title: String, note: String, labels: [String] ): Boolean
  }
`;
