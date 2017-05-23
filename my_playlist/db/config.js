const pgp = require('pg-promise')();

let db;


  db = pgp({
    database: 'cmer',
    port: 5432,
    host: 'localhost'
  });

module.exports = db;
