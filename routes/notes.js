const express = require('express');
const router = express.Router();

const db = require('../db/db.json');
const path = require('path');
const fs = require('fs').promises;

// get /api/notes
router.get('/', (req, res) => {
  res.status(200).json(db);
});

// post /api/notes
router.post('/', async (req, res) => {
  try {
    const title = req.body.title;
    const text = req.body.text;
    const note = { title, text };
    db.push(note);
    await fs.writeFile(
      path.resolve(__dirname, '../db/db.json'),
      JSON.stringify(db)
    );
    console.log('Note saved successfully');
    res.status(201).json({ success: true, data: db });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, msg: 'Bad request' });
  }
});

// delete /api/notes/:id

module.exports = router;
