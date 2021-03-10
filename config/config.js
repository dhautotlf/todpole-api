module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: 'postgres',
    host: '127.0.0.1',
    port: 54320,
    dialect: 'postgres',
    quoteIdentifiers: false,
  },
  production: {
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: process.env.DATABASE_URL1,
    port: 5432,
    ssl: true,
    dialect: 'postgres',
    quoteIdentifiers: false,
    dialectOptions: {
      ssl: true,
    },
  },
};
