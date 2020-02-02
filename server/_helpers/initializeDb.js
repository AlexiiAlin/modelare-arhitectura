const dbEntities = require("./db");

function initializeDb(db) {
  console.log("Initializing db");
  const { User, Class, ClassSubject, Grade, Subject } = dbEntities;
  let users = [
    new User({
      email: "admin@admin.com",
      hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
      firstName: "Manu",
      lastName: "Admin",
      role: 3
    }),
    new User({
      email: "teacher@teacher.com",
      hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
      firstName: "Manu",
      lastName: "Teacher",
      role: 2
    }),
    new User({
      email: "student@student.com",
      hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
      firstName: "Manu",
      lastName: "Student",
      role: 1
    })
  ];
  let classObj = new Class({
    name: "402"
  });
  let subject = new Subject({
    name: "Mathematics"
  });
  let grade = new Grade({});

  console.log("Initializing db : Connecting to db...");
  db.once("connected", function(err) {
    console.log("Initializing db : Connected to db!");
    console.log("Initializing db : Add User");
    if (err) {
      return console.error(err);
    }
    users.forEach((user, i) => {
      User.create(user, function(err, doc) {
        if (err) {
          return console.error(err);
        }
        console.log("Initializing db : User successfully added!");
      });
    });

    console.log("Initializing db : Add Class");
    Class.create(classObj, function(err, doc) {
      if (err) {
        return console.error(err);
      }
      console.log("Initializing db : Class successfully added!");
    });

    console.log("Initializing db : Add Subject");
    Subject.create(subject, function(err, doc) {
      if (err) {
        return console.error(err);
      }
      console.log("Initializing db : Subject successfully added!");
    });

    const classSubject = new ClassSubject({
      class: classObj,
      subject
    });
    console.log("Initializing db : Add ClassSubject");
    ClassSubject.create(classSubject, function(err, doc) {
      if (err) {
        return console.error(err);
      }
      console.log("Initializing db : ClassSubject successfully added!");
    });

    console.log("Initializing db : Add Grade");
    Grade.create(grade, function(err, doc) {
      if (err) {
        return console.error(err);
      }
      console.log("Initializing db : Grade successfully added!");
    });
  });
}

module.exports = initializeDb;
