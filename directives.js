const { AuthenticationError, SchemaDirectiveVisitor } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');

const assertOwner = (user, dbUser) => {
    console.log('*******')
    console.log(dbUser)
    if (user.id !== dbUser.dataValues.id) {
        throw new AuthenticationError('You do not have the right to access this field');
    }
}

class CheckOwnerDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field) {
        const originalResolve = field.resolve || defaultFieldResolver;

        field.resolve = async function (...args) {
            const context = args[2];
            const dbUser = args[0]
            const user = context.user || {};
            assertOwner(user, dbUser);
            
            return originalResolve.apply(this, args);
        }
    }
}

module.exports = CheckOwnerDirective;