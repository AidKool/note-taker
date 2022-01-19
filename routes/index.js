const express = require('express');
const router = express.Router();

const notesRouter = require('./notesRouter');
const htmlRouter = require('./htmlRouter');

router.use('/', htmlRouter);
router.use('/api/notes', notesRouter);

module.exports = router;
