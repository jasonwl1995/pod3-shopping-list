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

router.post('/', (req, res) => {
  console.log(req.body);
  const list= req.body.data; // you may be able to take the .data off
  const SQLtext = `INSERT INTO shopping ("name", "quantity", "unit", "purchased")
                   VALUES ($1, $2, $3, $4)`;

  pool.query(SQLtext, [list.name, list.quantity, list.unit, list.purchased])
    .then(dbResults => {
    console.log('Added an item to the database:', list);
    res.sendStatus(200);
  })
  .catch(err => {
    console.log(`error making database query...`, err);
    res.sendStatus(500)
  }) 
    
})



module.exports = router;