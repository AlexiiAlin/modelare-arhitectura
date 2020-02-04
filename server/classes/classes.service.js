const db = require('_helpers/db');
const Class = db.Class;

module.exports = {
  getClasses,
  createClass
};

async function getClasses() {
  return await Class.find()
      .populate({
        path: 'classSubjects',
        populate: {
          path: 'subject'
        }
      })
      .populate({
        path: 'students',
      })
      .populate({
        path: 'teachers',
      })
}

async function createClass(className, res) {
    const newClass = new Class({
        name: className
    });
    newClass.save(err => {
        if (err) {
            if (err.code === 11000) {
            } else {
                throw err;
            }
        }
    });
    res.send(newClass);
}
