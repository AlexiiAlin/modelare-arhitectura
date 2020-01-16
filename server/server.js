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
app.use(jwt());

// api routes
app.use('/users', require('./users/users.controller'));
app.use('/db-initializer', require('./db-initializer/db-initializer.controller'));

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
    //initializeDb();
});

function initializeDb() {
    console.log('Initializing db');
    const { User, Class, ClassSubject, Grade, Subject } = dbEntities;
    const user = new User({
        username: 'Test' + Date.now(),
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