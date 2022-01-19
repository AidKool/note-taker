const fs = require('fs').promises;

async function updateDB(path, db) {
  await fs.writeFile(path, JSON.stringify(db));
}

module.exports = updateDB;
