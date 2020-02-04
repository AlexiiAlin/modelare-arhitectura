require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('_helpers/jwt');
const errorHandler = require('_helpers/error-handler');
const mongoose = require('mongoose');
const config = require('config.json');
const db = mongoose.createConnection(config.connectionString);
const dbEntities = require('_helpers/db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
// app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/subjects', require('./subjects/subjects.controller'));
app.use('/classes', require('./classes/classes.controller'));
app.use('/class-subjects', require('./classSubject/classSubjects.controller'));
app.use('/db-initializer', require('./db-initializer/db-initializer.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
    // initializeStudentWithClassAndSubject();

});

function initializeStudentWithClassAndSubject() {
    const { User, Class, ClassSubject, Grade, Subject } = dbEntities;
    const classObj = new Class({
        name: 'THIS 402 ' + Date.now()
    });
    const subject = new Subject({
        name: 'THIS Math'
    });

    subject.save(err => {
        if (err) {
            if (err.code === 11000) {
            } else {
                throw err;
            }
        }
    });

    classObj.save(err => {
        if (err) {
            if (err.code === 11000) {
            } else {
                throw err;
            }
        }
    });

    const classSubject = new ClassSubject({
        class: classObj,
        subject
    });


    classSubject.save(err => {
        if (err) {
            if (err.code === 11000) {
            } else {
                throw err;
            }
        }
    });

    const user = new User({
        email: "THIS-alin@test.com",
        hash: "$2y$10$tAB3EsS.9fiRjll0.RmyM.y/wsq38a0yl8lJudxu4gv1Fm463kLVa",
        firstName: "Alin",
        lastName: "Alexii",
        role: "student",
        class: classObj
    });
    user.save(err => {
        if (err) {
            if (err.code === 11000) {
            } else {
                throw err;
            }
        }
    });
}

function initializeDb() {
    console.log('Initializing db');
    const { User, Class, ClassSubject, Grade, Subject } = dbEntities;
    const user = new User({
        email: 'Test' + Date.now(),
        hash: 'test',
        firstName: 'test',
        lastName: 'test',
    });
    const classObj = new Class({
        name: '402 ' + Date.now()
    });
    const subject = new Subject({
        name: 'Math'
    });
    const grade = new Grade({});

    console.log('Initializing db : Connecting to db...');
    db.once('connected', function (err) {
        console.log('Initializing db : Connected to db!');
        console.log('Initializing db : Add User');
        if (err) { return console.error(err) }
        User.create(user, function (err, doc) {
            if (err) { return console.error(err); }
            console.log('Initializing db : User successfully added!');
        });

        console.log('Initializing db : Add Class');
        Class.create(classObj, function (err, doc) {
            if (err) { return console.error(err); }
            console.log('Initializing db : Class successfully added!');
        });

        console.log('Initializing db : Add Subject');
        Subject.create(subject, function (err, doc) {
            if (err) { return console.error(err); }
            console.log('Initializing db : Subject successfully added!');
        });

        const classSubject = new ClassSubject({
            class: classObj,
            subject
        });
        console.log('Initializing db : Add ClassSubject');
        ClassSubject.create(classSubject, function (err, doc) {
            if (err) { return console.error(err); }
            console.log('Initializing db : ClassSubject successfully added!');
        });

        console.log('Initializing db : Add Grade');
        Grade.create(grade, function (err, doc) {
            if (err) { return console.error(err); }
            console.log('Initializing db : Grade successfully added!');
        });
    });
}