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
    createNote(title: String, note: String, labelIds: [ID] ): Note
  }

  type Mutation {
    deleteNote(id: ID): Boolean
  }

  type Mutation {
    updateNote(id: ID, title: String, note: String, labelIds: [ID] ): Boolean
  }
`;
