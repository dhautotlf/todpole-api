const typeDef = `
enum Gender {
    MALE
    FEMALE
    UNSPECIFIED
}

enum UserType {
    TODDLER
    USER
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
    login: String
    photo: String
    name: String
    birthDate: String
    gender: Gender
    password: String
    type: String
    toddlerList: [User]
    bookmarkList: [Activity]
}
`;

module.exports = typeDef;