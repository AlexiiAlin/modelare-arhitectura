const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  name: { type: String, unique: true, required: true },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ],
  classSubjects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClassSubject"
    }
  ]
});

schema.set("toJSON", { virtuals: true });

module.exports = mongoose.model("Class", schema);
