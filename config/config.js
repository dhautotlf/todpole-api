module.exports = {
    "development": {
      "username": "postgres",
      "password": "postgres",
      "database": "postgres",
      "host": "127.0.0.1",
      "port": 54320,
      "dialect": "postgres",
      "quoteIdentifiers": false
    },
    "production": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": "postgres",
      "host": "todpole.cl6rtglnu4jq.eu-west-1.rds.amazonaws.com",
      "port": 54320,
      "dialect": "postgres",
      "quoteIdentifiers": false
    }
  }
  