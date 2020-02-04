const db = require('_helpers/db');
const ClassSubject = db.ClassSubject;

module.exports = {
  getAllClassSubjects,
};

async function getAllClassSubjects() {
  return await ClassSubject.find();
}

