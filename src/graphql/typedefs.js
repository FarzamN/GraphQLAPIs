import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    password: String!
    birthDate: String!
    email: String!
    phone: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
  }

  type Mutation {
    createUser(
      name: String!
      password: String!
      birthDate: String!
      email: String!
      phone: String!
    ): User

    updateUser(
      id: ID!
      name: String
      password: String
      birthDate: String
      email: String
      phone: String
    ): User
    deleteUser(id: ID!): User
  }
`;

export default typeDefs;
