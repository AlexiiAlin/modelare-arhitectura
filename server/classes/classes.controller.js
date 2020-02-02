const express = require("express");
const router = express.Router();
const classService = require("./class.service");

// routes
router.get("/", getAllClasses);

function getAllClasses(req, res, next) {
  classService
    .getAllClasses()
    .then(classes => res.json(classes))
    .catch(err => next(err));
}

module.exports = router;
