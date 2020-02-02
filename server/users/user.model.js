const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  email: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  createdDate: { type: Date, default: Date.now, required: true },
  role: { type: Number, default: 0, enum: [0, 1, 2, 3] }, // We'll consider: 0 = Unconfirmed, 1 = Student, 2 = Teacher, 3 = Admin
  class: {
    // student-related
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class"
  },
  grades: [
    {
      // student-related
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade"
    }
  ],
  classSubjects: [
    {
      // teacher-related
      type: mongoose.Schema.Types.ObjectId,
      ref: "ClassSubject"
    }
  ]
});

schema.set("toJSON", { virtuals: true });

const User = mongoose.model("User", schema);

module.exports = User;
