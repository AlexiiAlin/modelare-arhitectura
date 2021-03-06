const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, enum: ["admin", "teacher", "student"] },
  createdDate: { type: Date, default: Date.now, required: true },
  class: { // student-related
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class'
  },
  grades: [{ // student-related
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grade'
  }],
  classSubjects: [{ // teacher-related
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClassSubject'
  }]
});

schema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", schema);

let user = new User({
  email: "manu@creative-tim.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Admin",
  role: "admin"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare1@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare2@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare3@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare4@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare5@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare6@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare7@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare8@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare9@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare10@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare11@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuelioannazare12@gmail.com",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Teacher",
  role: "teacher"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

user = new User({
  email: "emanuel-ioan.nazare@my.fmi.unibuc.ro",
  hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
  firstName: "Manu",
  lastName: "Student",
  role: "student"
});

user.save(err => {
  if (err) {
    if (err.code === 11000) {
    } else {
      throw err;
    }
  }
});

module.exports = User;
