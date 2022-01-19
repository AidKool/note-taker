const express = require('express');
const notes = require('./notesRouter');
const router = express.Router();

router.use('/api/notes', notes);

module.exports = router;
