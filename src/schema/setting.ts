export const settingType = `#graphql
  type Setting {
    name: String
    description: String
    labels: [String]
  }
  
  type Query {
    getSettingsForBookId(bookId: String): [Setting]
  }

  type Query {
    getSettingById(id: String): Setting
  }

  type Mutation {
    addSetting(name: String, description: String, labels: [String] ): Boolean
  }
`;
