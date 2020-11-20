const { gql } = require('apollo-server-express');
const User = require('./typedefs/user');
const Activity = require('./typedefs/activity');
const Review = require('./typedefs/review');
const ActivityImage = require('./typedefs/activityImage');
const Bookmark = require('./typedefs/bookmark');
const Tag = require('./typedefs/tag');
const Material = require('./typedefs/material');

const typeDefs = gql`
    type Query {
        current: User   
        activities: [Activity]
        activity(id: Int!): Activity
        myReviews: [Review]
        myBookmarks: [Bookmark]
        searchTags(text: String): [Tag]
        searchMaterials(name: String): [Material]
    }

    type Mutation {
        register(login: String!, password: String!, photo: String, name:String, birthDate: String, gender: String, gender: Gender, type: UserType, toddlerList: [UserInput]): String
        login(login: String!, password: String!): String
        createActivity(activityInput: ActivityInput!): Activity
        createReview(reviewInput: ReviewInput!): Review
        createBookmark(bookmarkInput: BookmarkInput!): Bookmark
    }
`;

module.exports = [typeDefs, User, Activity, Review, ActivityImage, Bookmark, Tag, Material];
