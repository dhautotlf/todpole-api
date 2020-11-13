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
        category: ActivityCategory!
        name: String!
        ageMin: Int!
        ageMax: Int!
        timingMin: Int!
        timingMax: Int!
        description: String!
        url: String
        activityImageList: [ActivityImageInput]
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
        category: ActivityCategory!
        name: String!
        ageMin: Int!
        ageMax: Int!
        timingMin: Int!
        timingMax: Int!
        description: String!
        url: String
        reviewList: [Review]
        activityImageList: [ActivityImage]
    }

    input ReviewInput {
        activityId: Int!
        rating: Int!
        text: String
    }

    type Review {
        id: Int!
        userId: Int!
        activityId: Int!
        rating: Int!
        text: String
    }

    input ActivityImageInput {
        url: String!
        isMain: Boolean
    }

    type ActivityImage {
        id: Int!
        activityId: Int!
        url: String!
        isMain: Boolean
    }

    type Query {
        current: User
        activities: [Activity]
        activity(id: Int!): Activity
        myReviews: [Review]
    }

    type Mutation {
        register(login: String!, password: String!, photo: String, name:String, birthDate: String, gender: String, gender: Gender, type: UserType, toddlerList: [UserInput]): String
        login(login: String!, password: String!): String
        createActivity(activityInput: ActivityInput!): Activity
        createReview(reviewInput: ReviewInput!): Review
    }
`;

module.exports = typeDefs;