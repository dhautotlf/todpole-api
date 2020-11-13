const { gql } = require("apollo-server-express");

const typeDefs = gql`
    enum Gender {
        MALE
        FEMALE
        UNSPECIFIED
    }
    
    enum UserType {
        TODDLER
        USER
    }

    input UserInput {
        login: String
        photo: String
        name: String
        birthDate: String
        gender: Gender
        email: String
        password: String
        type: String
    }

    type User {
        id: Int!
        login: String
        photo: String
        name: String
        birthDate: String
        gender: Gender
        email: String
        password: String
        type: String
        toddlerList: [User]
    }

    input ActivityInput {
        category: ActivityCategory
        name: String
        ageMin: Int
        ageMax: Int
        timingMin: Int
        timingMax: Int
        description: String
        url: String
    }

    enum ActivityCategory {
        PHYSICAL
        COGNITIVE
        SPEECH
        SOCIAL_EMOTION
        SELF_CARE
    }

    type Activity {
        id: Int!
        userId: Int!
        category: ActivityCategory
        name: String
        ageMin: Int
        ageMax: Int
        timingMin: Int
        timingMax: Int
        description: String
        url: String
    }

    type Query {
        current: User
        activities: [Activity]
    }

    type Mutation {
        register(login: String!, password: String!, photo: String, name:String, birthDate: String, gender: String, gender: Gender, type: UserType, toddlerList: [UserInput]): String
        login(login: String!, password: String!): String
        createActivity(category: ActivityCategory,name: String,ageMin: Int,ageMax: Int,timingMin: Int,timingMax: Int,description: String,url: String): Activity
    }
`;

module.exports = typeDefs;