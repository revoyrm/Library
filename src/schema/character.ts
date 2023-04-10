export const characterType = `#graphql
  type Label {
    id: ID
    label: String
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

  type Character {
    id: ID
    name: String
    age: Int
    description: String
    label: Label
    book: Book
  }
  
  type Query {
    getCharactersByBookId(bookId: String): [Character]
  }
  
  type Query {
    getCharactersByLabelIds(labelIds: [ID]): [Character]
  }

  type Query {
    getCharacterById(id: ID): Character
  }

  type Mutation {
    createCharacter(bookId: String, name: String, age: Int, description: String ): Character
  }

  type Mutation {
    deleteCharacter(id: String): Boolean
  }

  type Mutation {
    updateCharacter(id: ID, name: String, age: Int, description: String, labelId: ID): Boolean
  }
`;
