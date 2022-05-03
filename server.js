const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
const PORT = process.env.PORT || 8070;
const MONGODB_URI = process.env.MONGODB_URI;

const timetableRouter = require("./routes/timetableRoutes");

mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log("Database Error:", error.message);
    }
  }
);

mongoose.connection.once("open", () => {
  console.log("Database Synced");
});

app.route("/").get((req, res) => {
  res.send("malith");
});

const studentRouter = require("./routes/student.js");
const teacherRouter = require("./routes/teachers.js");

app.use("/student", studentRouter);
app.use("/teacher", teacherRouter);
const studentMarkRouter = require("./routes/mark.js");

app.use("/mark", studentMarkRouter);
// const studentRouter = require("./routes/student.js");

app.use("/student", studentRouter);
app.use("/timetable", timetableRouter);

app.listen(PORT, () => {
  console.log(`Server is up and running on PORT ${PORT}`);
});
