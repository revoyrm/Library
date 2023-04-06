export const characterType = `#graphql
  type Label {
    label: String
    id: ID
  }

  type Character {
    name: String
    description: String
    label: Label
  }
  
  type Query {
    getCharactersByBookId(bookId: String): [Character]
  }

  type Query {
    getCharacterById(id: String): Character
  }

  type Mutation {
    addCharacter(name: String, description: String): Boolean
  }
`;
