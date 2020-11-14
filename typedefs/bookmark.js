const typeDef = `
input BookmarkInput {
    activityId: Int!
}

type Bookmark {
    id: Int!
    userId: Int!
    activityId: Int!
    activity: Activity
}
`;

module.exports = typeDef;