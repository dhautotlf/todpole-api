const typeDef = `
input ActivityInput {
    category: ActivityCategory!
    name: String!
    ageMin: Int!
    ageMax: Int!
    timing: Int!
    description: String!
    url: String
    activityImageList: [ActivityImageInput]
    tagList: [TagInput]
    materialList: [MaterialInput]
    review: ReviewInput2
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
    timing: Int!
    description: String!
    url: String
    reviewList: [Review]
    activityImageList: [ActivityImage]
    tagList: [Tag]
    user: User!
    materialList: [Material]
}
`;

module.exports = typeDef;
