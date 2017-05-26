const pgp = require('pg-promise')();

let db;
console.log('Working')
if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
  console.log('I am here now')
  db = pgp({
    database: 'adaquote_development',
    port: 5432,
    host: 'localhost',
  });
} else if (process.env.NODE_ENV === 'production') {
  console.dir(process.env.DATABASE_URL)
  db = pgp(process.env.DATABASE_URL);
}

module.exports = db;
