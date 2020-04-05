import { gql } from 'apollo-server-express';

const userTypeDef = gql`
  type User {
    _id: String
    name: String
    email: String
    password: String
  }

  type Query {
    user: [User]!
  }

  input UserInput {
    name: String
    email: String!
    password: String!
  }

  type AuthUser {
    token: String!
    user: User
  }

  type Mutation {
    signUp(input: UserInput): AuthUser!
    login(input: UserInput!): AuthUser!
  }
`;

export default userTypeDef;
