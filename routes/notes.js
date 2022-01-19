const express = require('express');
const router = express.Router();

const db = require('../db/db.json');

router.get('/', (req, res) => {
  res.json(db);
});

module.exports = router;
