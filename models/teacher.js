const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  teacherName: {
    type: String,
    required: true,
  },
  teacherNic: {
    type: String,
    required: true,
  },
  teacherGender: {
    type: String,
    required: true,
  },
  //   teacherBirthDate: {
  //     type: Date,
  //     required: true,
  //   },

  teacherEmail: {
    type: String,
    required: true,
    unique: true,
  },
  teacherMobile: {
    type: Number,
    required: true,
  },
  teacherSubject: {
    type: String,
    required: true,
  },
  teacherGrade: {
    type: Number,
    required: true,
  },
});
const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
