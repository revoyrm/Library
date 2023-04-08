export const chapterType = `#graphql
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

  type Chapter {
    id: ID
    name: String
    description: String
    number: Int
    label: Label
    book: Book
  }
  
  type Query {
    getChaptersByBookId(bookId: String): [Chapter]
  }

  type Query {
    getChapterById(id: ID): Chapter
  }

  type Mutation {
    createChapter(bookId: ID, name: String, number: String, description: String ): Chapter
  }

  type Mutation {
    deleteChapter(id: String): Boolean
  }

  type Mutation {
    updateChapter(id: ID, name: String, number: Int, description: String, labelId: ID): Boolean
  }
`;
