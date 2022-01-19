const express = require('express');
const router = express.Router();

let db = require('../db/db.json');
const path = require('path');
const fs = require('fs').promises;
const { v4: uuidv4 } = require('uuid');

// get /api/notes
router.get('/', (req, res) => {
  res.status(200).json(db);
});

// post /api/notes
router.post('/', async (req, res) => {
  try {
    const title = req.body.title;
    const text = req.body.text;
    const id = uuidv4();

    const note = { title, text, id };
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
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  db = db.filter((note) => {
    return note.id !== id;
  });
  await fs.writeFile(
    path.resolve(__dirname, '../db/db.json'),
    JSON.stringify(db)
  );
  console.log('Note deleted successfully');
  res.status(201).json({ success: true, data: db });
});

module.exports = router;
