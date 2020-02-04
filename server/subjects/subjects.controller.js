const express = require("express");
const router = express.Router();
const subjectService = require("./subject.service");

// routes
router.get("/", getAllSubjects);
// router.get('/students/:id', getSubjectStudent);
router.post("/", createSubject);

function getAllSubjects(req, res, next) {
  subjectService
    .getAllSubjects()
    .then(subjects => res.json(subjects))
    .catch(err => next(err));
}

function getSubjectStudent(req, res, next) {
  subjectService
      .getSubjectStudent(req.params.id)
      .then(subjectStudent => res.json(subjectStudent))
      .catch(err => next(err));
}

function createSubject(req, res, next) {
  subjectService.createSubject(req.body.subjectName, res);
}

module.exports = router;
