const config = require("config.json");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("_helpers/db");
const Subject = db.Subject;
const Class = db.Class;

module.exports = {
  getAllSubjects,
  createSubject,
  getSubject
};

async function getAllSubjects() {
  let subjects = await Subject.find({}).populate("classSubjects");
  let noClasses = await subjects.classSubjects.length;
  let noStundents = 0;
  let classes = await subjects.classSubjects;
  await classes.forEach(async (item, i) => {
    // let class = await Class.find({_id: item._id})
  });

  return {};
}

async function createSubject(subject) {
  // validate
  if (await Class.findOne({ name: subject.name })) {
    throw 'Class "' + subject.name + '" allready exists';
  }

  const newSubject = new Subject(subject);

  // save user
  await newSubject.save();
  return newSubject;
}

async function getSubject(id) {}
