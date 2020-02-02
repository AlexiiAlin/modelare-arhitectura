const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const Class = db.Class;

module.exports = {
  getAllClasses,
  createClass,
  getClass
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

async function createClass(classObj) {
  // validate
  if (await Class.findOne({ name: classObj.name })) {
    throw 'Class "' + classObj.name + '" allready exists';
  }

  const newClass = new Class(classObj);

  // save user
  await newClass.save();
  return newClass;
}

async function getClass(id) {
  const classObj = await Class.findById(id);
  const newClass = {
    name: classObj.name,
    id: classObj._id,
    students: classObj.students.map((prop, key) => {
      return {
        id: prop._id,
        firstName: prop.firstName,
        lastName: prop.lastName
      };
    })
  };
  return newClass;
}
