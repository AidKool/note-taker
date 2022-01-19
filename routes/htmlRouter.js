const express = require('express');
const router = express.Router();

const {
  redirectHome,
  loadNotesPage,
} = require('../controllers/htmlController');

// get /
router.get('/', redirectHome);

// get /notes
router.get('/notes', loadNotesPage);

module.exports = router;
