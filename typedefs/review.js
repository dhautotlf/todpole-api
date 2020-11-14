const typeDef = `
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
`;

module.exports = typeDef;