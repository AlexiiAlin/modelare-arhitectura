const express = require("express");
const router = express.Router();
const subjectService = require("./subject.service");

// routes
router.get("/", getAllSubjects);
router.post("/", createSubject);
router.get("/:id", getSubject);

function getAllSubjects(req, res, next) {
  subjectService
    .getAllSubjects()
    .then(classes => res.json(classes))
    .catch(err => next(err));
}

function createSubject(req, res, next) {
  subjectService
    .createSubject(req.body)
    .then(subject => res.json(subject))
    .catch(err => next(err));
}

function getSubject(req, res, next) {
  subjectService
    .getSubject(req.params.id)
    .then(subject => (subject ? res.json(subject) : res.sendStatus(404)))
    .catch(err => next(err));
}

module.exports = router;
