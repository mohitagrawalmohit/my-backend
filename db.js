// backend/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'regreen_agro',
  password: process.env.DB_PASSWORD,
  port: 5432,
});

module.exports = pool;
