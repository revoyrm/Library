export const labelType = `#graphql
  type Label {
    id: ID
    label: String
  }

  type Query {
    getLabelsByIds(ids: [ID]): [Label]
  }
`;
