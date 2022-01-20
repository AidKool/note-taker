const express = require('express');
const router = express.Router();

const notesRouter = require('./notesRouter');
const htmlRouter = require('./htmlRouter');

router.use('/api/notes', notesRouter);
router.use('/', htmlRouter);

module.exports = router;
