const express = require('express');
const path = require('path');
const app = express();

port = process.env.PORT || 3000;

const notes = require('./routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notes);

app.get('/notes', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public/notes.html'));
});

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
