const express = require("express");
const router = express.Router();
const classSubjectService = require("./classSubject.service");

// routes
router.get("/", getAllClassSubjects);

function getAllClassSubjects(req, res, next) {
  classSubjectService
    .getAllClassSubjects()
    .then(subjects => res.json(subjects))
    .catch(err => next(err));
}

module.exports = router;
