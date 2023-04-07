"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.labelType = void 0;
exports.labelType = `#graphql
  type Label {
    label: String
    book: Book
  }

  type Query {
    getLabelByBookId(id: String): Label
  }
  
`;
