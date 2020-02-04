const db = require('_helpers/db');
const Subject = db.Subject;
const User = db.User;

module.exports = {
  getAllSubjects,
  getSubjectStudent,
  createSubject,
};

async function getAllSubjects() {
  return await Subject.find()
      .populate({
        path: 'class',
      })
      .populate({
        path: 'students',
      })
      .populate({
        path: 'teachers',
      });
}

async function getSubjectStudent(studentId) {
  return await User.find(studentId)
      .populate({
        path: 'class',
        populate: {
          path: 'classSubjects',
          populate: {
            path: 'subject'
          }
        }
      })
      .populate({
        path: 'grades',
      });
}

async function createSubject(subjectName, res) {
  const newSubject = new Subject({
    name: subjectName
  });
  newSubject.save(err => {
    if (err) {
      if (err.code === 11000) {
      } else {
        throw err;
      }
    }
  });
  res.send(newSubject);
}
