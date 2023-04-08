export const settingType = `#graphql
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

  type Setting {
    id: ID
    name: String
    description: String
    label: Label
    book: Book
  }
  
  type Query {
    getSettingsByBookId(bookId: String): [Setting]
  }

  type Query {
    getSettingById(id: ID): Setting
  }

  type Mutation {
    createSetting(bookId: String, name: String, description: String ): Setting
  }

  type Mutation {
    deleteSetting(id: String): Boolean
  }

  type Mutation {
    updateSetting(id: ID, name: String, description: String, labelId: ID): Boolean
  }
`;
