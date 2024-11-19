// routes/brothers.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // Assuming your DB connection is in db.js

router.get('/', (req, res) => {
  db.query('SELECT * FROM brothers_db.brothers', (err, results) => {
    if (err) {
      console.error('Database query error:', err); //Log the detailed error 
      res.status(500).send('Error fetching brothers data');
      return;
    }
    res.json(results);  // Send the results as a JSON response
  });
});

module.exports = router;

