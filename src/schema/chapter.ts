export const chapterType = `#graphql
  type Label {
    label: String
    id: ID
  }

  type Chapter {
    name: String
    description: String
    number: Int
    label: Label
  }
  
  type Query {
    getChaptersByBookId(bookId: String): [Chapter]
  }

  type Query {
    getChapterById(id: String): Chapter
  }

  type Mutation {
    addChapter(name: String, description: String, number: Int): Boolean
  }
`;
