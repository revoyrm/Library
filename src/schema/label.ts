export const labelType = `#graphql
  type Label {
    label: String
    book: Book
  }

  type Query {
    getLabelByBookId(id: String): Label
  }
  
`;
