export const settingType = `#graphql
  type Setting {
    name: String
    description: String
    label: Label
  }
  
  type Query {
    getSettingsByBookId(bookId: String): [Setting]
  }

  type Query {
    getSettingById(id: String): Setting
  }

  type Mutation {
    addSetting(name: String, description: String, label: Label ): Boolean
  }
`;