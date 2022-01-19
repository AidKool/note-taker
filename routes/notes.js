const express = require('express');
const router = express.Router();

const { getNotes, postNote, deleteNote } = require('../controllers/notes');

// get /api/notes
router.get('/', getNotes);

// post /api/notes
router.post('/', postNote);

// delete /api/notes/:id
router.delete('/:id', deleteNote);

module.exports = router;
