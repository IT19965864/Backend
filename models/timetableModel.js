const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;

const timetableSchema = new Schema({
  teacherName: {
    type: String,
    required: [true, "Select a Name from the dropdown list"],
  },
  subject: {
    type: String,
    required: [true, "Select a subject from the dropdown list"],
  },
  grade: {
    type: String,
    required: [true, "Select a grade from the dropdown list"],
  },
  day: {
    type: String,
    required: [true, "Select a day from the dropdown list"],
  },
  startTime: {
    type: String,
    required: [true, "Select a subject from the clock"],
  },
  endTime: {
    type: String,
    required: [true, "Select a subject from the clock "],
  },
});
const Timetable = mongoose.model("Timetable", timetableSchema);

module.exports = Timetable;
