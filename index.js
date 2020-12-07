const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const jwt = require('express-jwt');
const { ApolloServerPluginUsageReporting } = require('apollo-server-core');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { JWT_SECRET } = require('./constants');
const CheckOwnerDirective = require('./directives');
const { activate: activateHandler, supportHandler, privacytHandler } = require('./static/handlers');

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

app.use(express.static(`${__dirname}/static/html`));
// Public GET endpoint handling user account activation
app.get('/activate', activateHandler);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    checkOwner: CheckOwnerDirective,
  },
  reportSchema: true,
  introspection: true,
  playground: {
    endpoint: '/graphql',
  },
  apollo: {
    key: process.env.APOLLO_KEY,
    graphVariant: process.env.ENV_LABEL,
    reportSchema: true,
  },
  plugins: [
    ApolloServerPluginUsageReporting({
      sendVariableValues: { exceptNames: ['login', 'password'] },
    }),
  ],
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
