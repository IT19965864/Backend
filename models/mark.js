const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
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

// studentMarkSchema.methods.generateAuthToken = function () {
//   const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
//     expiresIn: "10d",
//   });
//   return token;
// };
const StudentMark = mongoose.model("StudentMark", studentMarkSchema);

module.exports = StudentMark;
