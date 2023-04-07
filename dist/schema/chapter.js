"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chapterType = void 0;
exports.chapterType = `#graphql
  type Chapter {
    name: String
    description: String
    number: Number
    label: Label
  }
  
  type Query {
    getChaptersByBookId(bookId: String): [Chapter]
  }

  type Query {
    getChapterById(id: String): Chapter
  }

  type Mutation {
    addChapter(name: String, description: String, number: Number): Boolean
  }
`;
