const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const studentMarkSchema = new Schema({
  nicno: {
    type: String,
    required: true,
  },
  studName: {
    type: String,
    required: true,
  },
  stream: {
    type: String,
    required: true,
  },
  term: {
    type: Number,
    required: true,
  },

  chemMarks: {
    type: Number,
    required: true,
  },
  physicsMarks: {
    type: Number,
    required: true,
  },
  bioMarks: {
    type: Number,
    required: false,
  },
  mathsMarks: {
    type: Number,
    required: false,
  },
});
const StudentMark = mongoose.model("StudentMark", studentMarkSchema);

module.exports = StudentMark;
