const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const Class = db.Class;

module.exports = {
  getAllClasses
};

async function getAllClasses() {
  let classes = await Class.find({});
  classes = classes.map(prop => {
    let newProp = {
      className: prop.name,
      noStudents: prop.students.length,
      noTeachers: prop.teachers.length,
      noSubjects: prop.classSubjects.length,
      id: prop._id
    };
    return newProp;
  });
  return classes;
}
