const express = require('express');
const router = express.Router();

const {
  loadHomePage,
  loadNotesPage,
} = require('../controllers/htmlController');

// get /notes
router.get('/notes', loadNotesPage);

// get *
router.get('*', loadHomePage);

module.exports = router;
