const typeDef = `
directive @checkOwner on FIELD | FIELD_DEFINITION

enum Gender {
    MALE
    FEMALE
    UNSPECIFIED
}

enum UserType {
    TODDLER
    USER
}

enum UserStatus {
    ACTIVATION_PENDING
    ACTIVE
    DISABLED
}

input UserInput {
    login: String
    photo: String
    name: String
    birthDate: String
    gender: Gender
    password: String
    type: String
}

type User {
    id: Int!
    login: String @checkOwner
    photo: String
    name: String
    birthDate: String @checkOwner
    gender: Gender @checkOwner
    password: String @checkOwner
    type: String @checkOwner
    toddlerList: [User] @checkOwner
    bookmarkList: [Activity] @checkOwner
    status: UserStatus
}
`;

module.exports = typeDef;
