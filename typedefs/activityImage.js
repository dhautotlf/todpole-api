const typeDef = `
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
`;

module.exports = typeDef;
