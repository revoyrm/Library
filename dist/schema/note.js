"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteType = void 0;
exports.noteType = `#graphql
  type Note {
    title: String
    note: String
    labels: [Label]
  }
  
  input LabelInput {
    id: Number,
    label: String
  }

  type Query {
    getNotesByBookId(bookId: String): [Note]
  }

  type Query {
    getNoteById(id: String): Note
  }

  type Mutation {
    addNote(title: String, note: String, label: [LabelInput] ): Boolean
  }
`;
