const typeDef = `
input TagInput {
    text: String
}

type Tag {
    id: Int!
    text: String
}

type ActivityTag {
    id: Int!
    tagId: Int!
    activityId: Int!
}
`;

module.exports = typeDef;