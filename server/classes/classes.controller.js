const express = require("express");
const router = express.Router();
const classService = require("./class.service");

// routes
router.get("/", getAllClasses);
router.post("/", createClass);
router.get("/:id", getClass);
router.put("/:id", addNewStudent);

function getAllClasses(req, res, next) {
  classService
    .getAllClasses()
    .then(classes => res.json(classes))
    .catch(err => next(err));
}

function createClass(req, res, next) {
  classService
    .createClass(req.body)
    .then(classObj => res.json(classObj))
    .catch(err => next(err));
}

function getClass(req, res, next) {
  classService
    .getClass(req.params.id)
    .then(classObj => (classObj ? res.json(classObj) : res.sendStatus(404)))
    .catch(err => next(err));
}

function addNewStudent(req, res, next) {
  classService
    .addNewStudent(req.params.id, req.body)
    .then(classObj => res.json(classObj))
    .catch(err => next(err));
}

module.exports = router;
