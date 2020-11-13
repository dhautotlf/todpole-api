const { gql } = require("apollo-server-express");

const typeDefs = gql`
    enum Gender {
        MALE
        FEMALE
        UNSPECIFIED
    }
    type User {
        id: Int!
        login: String!
        photo: String
        name: String
        birthDate: String,
        gender: Gender,
        email: String
        password: String!
        type: String
    }

    type Query {
        current: User
    }

    type Mutation {
        register(login: String!, password: String!): String
        login(login: String!, password: String!): String
    }
`;

module.exports = typeDefs;