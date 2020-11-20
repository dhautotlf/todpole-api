const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('express-jwt');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const JWT_SECRET = require('./constants');
const CheckOwnerDirective = require('./directives');

const app = express();
const auth = jwt({
  secret: JWT_SECRET,
  credentialsRequired: false,
  algorithms: ['sha1', 'RS256', 'HS256'],
});
app.use(auth, (err, req, res, next) => {
  if (err.code) {
    return res.status(401).send(err);
  }
  return next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    checkOwner: CheckOwnerDirective,
  },
  introspection: true,
  playground: {
    endpoint: '/graphql',
  },
  context: ({ req }) => {
    // eslint-disable-next-line
    const user = req.headers.user
      ? JSON.parse(req.headers.user)
      : req.user
        ? req.user
        : null;
    return { user };
  },
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  // eslint-disable-next-line
  console.log(`The server started on port ${PORT}`);
});
