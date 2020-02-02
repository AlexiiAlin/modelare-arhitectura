const express = require("express");
const router = express.Router();
const classService = require("./class.service");

// routes
router.get("/", getAllClasses);
router.post("/", createClass);

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

module.exports = router;
