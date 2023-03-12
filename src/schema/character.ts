export const characterType = `#graphql
  type Character {
    name: String
    description: String
    labels: [String]
  }
  
  type Query {
    getCharactersForBookId(bookId: String): [Character]
  }

  type Query {
    getCharacterById(id: String): Character
  }

  type Mutation {
    addCharacter(name: String, description: String, labels: [String] ): Boolean
  }
`;
