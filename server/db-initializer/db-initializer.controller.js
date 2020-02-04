const mongoose = require('mongoose');
const config = require('config.json');
const db = mongoose.createConnection(config.connectionString);
const dbEntities = require('_helpers/db');
const express = require('express');
const router = express.Router();

router.post('/', initializeDb);

module.exports = router;

function initializeDb(req, res) {
    console.log('Initializing db : Started...');
    const { User, Class, ClassSubject, Grade, Subject } = dbEntities;
    const user = new User({
        username: 'Test' + Date.now(),
        hash: 'test',
        firstName: 'test',
        lastName: 'test',
    });

    console.log('Initializing db : Connecting to db...');
    db.once('connected', function (err) {
        console.log('Initializing db : Connected to db!');
        console.log('Initializing db : Add User');
        if (err) { return console.error(err) }
        User.create(user, function (err, doc) {
            if (err) { return console.error(err); }
            console.log('Initializing db : User successfully added!');
            return db.close();
        })
    });

    console.log('Initializing db : Finished!');
    res.send('Finished!');
}