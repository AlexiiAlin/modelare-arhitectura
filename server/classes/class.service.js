const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const Class = db.Class;
const User = db.User;

module.exports = {
  getAllClasses,
  createClass,
  getClass,
  addNewStudent
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
  const classObj = await Class.findById(id).populate("students");
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

async function addNewStudent(id, userParam) {
  let user = await User.findOne({ email: userParam.email, role: 1 });
  if (!user) {
    throw 'Email "' + userParam.email + '" is not a valid stundent email';
  }
  const classObj = await Class.findById(id);
  await Class.update({_id: classObj._id}, {$addToSet: {students: user}})
  await User.update({_id: user._id}, {class: classObj});

  return getClass(id);
}
