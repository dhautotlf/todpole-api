const typeDef = `
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
`;

module.exports = typeDef;
