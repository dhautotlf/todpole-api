const typeDef = `
input MaterialInput {
    name: String
}

type Material {
    id: Int!
    name: String
}

type ActivityMaterial {
    id: Int!
    materialId: Int!
    activityId: Int!
}
`;

module.exports = typeDef;
