const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'myuser',
  password: process.env.POSTGRES_PASSWORD || 'mypass',
  database: process.env.POSTGRES_DB || 'mydb',
  port: 5432,
});

// Test route
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM app.user_details WHERE id = 1');
    console.log('request to backend via default route');
    res.send(`User from pg DB: ${JSON.stringify(result.rows[0])}`);
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Database connection failed.');
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});