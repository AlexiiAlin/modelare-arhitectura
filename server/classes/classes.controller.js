const express = require("express");
const router = express.Router();
const clasessService = require("./classes.service");

// routes
router.get("/", getAll);
router.post('/', createClass);

function getAll(req, res, next) {
  clasessService
    .getClasses()
    .then(classes => res.json(classes))
    .catch(err => next(err));
}

function createClass(req, res, next) {
  clasessService.createClass(req.body.className, res);
}

module.exports = router;
