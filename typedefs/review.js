const typeDef = `
input ReviewInput {
    activityId: Int!
    rating: Int!
    text: String
}

input ReviewInput2 {
    rating: Int!
    text: String
}

type Review {
    id: Int!
    userId: Int!
    activityId: Int!
    rating: Int!
    text: String
    user: User
}
`;

module.exports = typeDef;
