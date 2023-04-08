export const noteType = `#graphql
  type Label {
    id: ID,
    label: String
  }

  type Note {
    id: ID
    title: String
    note: String
    labels: [Label]
  }

  type Query {
    getNotesByLabelIds(labelIds: [ID]): [Note]
  }

  type Query {
    getNoteById(id: String): Note
  }

  type Mutation {
    createNote(title: String, note: String, labels: [ID] ): Note
  }

  type Mutation {
    updateNote(title: String, note: String, labels: [ID] ): Boolean
  }

  type Mutation {
    deleteNote(id: ID): Boolean
  }
`;
