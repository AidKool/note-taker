const path = require('path');
let db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const updateDB = require('../helpers/updateDB');

function getNotes(req, res) {
  res.status(200).json(db);
}

async function postNote(req, res) {
  try {
    const title = req.body.title;
    const text = req.body.text;
    const id = uuidv4();

    const note = { title, text, id };
    db.push(note);

    const filePath = path.resolve(__dirname, '../db/db.json');
    await updateDB(filePath, db);
    res.status(201).json({ success: true, data: db });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, msg: 'Bad request' });
  }
}

async function deleteNote(req, res) {
  try {
    const id = req.params.id;
    db = db.filter((note) => {
      return note.id !== id;
    });
    const filePath = path.resolve(__dirname, '../db/db.json');
    await updateDB(filePath, db);
    res.status(201).json({ success: true, data: db });
  } catch (error) {
    console.error(error);
  }
}

module.exports = { getNotes, postNote, deleteNote };
