const config = require("config.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || config.connectionString, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;

module.exports = {
  User: require("../users/user.model"),
  Class: require("../classes/class.model"),
  ClassSubject: require("../classSubject/classSubject.model"),
  Subject: require("../subjects/subject.model"),
  Grade: require("../grades/grade.model")
};
