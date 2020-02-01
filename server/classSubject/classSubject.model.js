const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class"
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  }
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("ClassSubject", schema);
