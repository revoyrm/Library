export const chapterType = `#graphql
  type Chapter {
    name: String
    description: String
    labels: [String]
  }
  
  type Query {
    getChaptersForBookId(bookId: String): [Chapter]
  }

  type Query {
    getChapterById(id: String): Chapter
  }

  type Mutation {
    addChapter(name: String, description: String, labels: [String] ): Boolean
  }
`;
