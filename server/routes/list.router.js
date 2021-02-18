const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// TODO - Add routes here...

router.get('/', (req, res) => {
  const SQLtext = `SELECT * FROM shopping
  ORDER BY NAME ASC;
  `

  pool.query(SQLtext).then(dbResults => {
    console.log('pool.query db results.rows:', dbResults.rows);
    res.send(dbResults.rows)
  }).catch(err => {
    console.log('error in pool.query get', err);
    res.sendStatus(500)
  })
})

module.exports = router;