const path = require('path');

function loadHomePage(req, res) {
  res.redirect('/');
}

function loadNotesPage(req, res) {
  res.sendFile(path.resolve(__dirname, '../public/notes.html'));
}

module.exports = { loadHomePage, loadNotesPage };
