const router = require("express").Router();
let Timetable = require("../models/timetableModel");

router.route("/").post(async (req, res) => {
  try {
    console.log(req.body);
    const savedTimetable = await Timetable.create(req.body);
    res.status(200).json({ timetable: savedTimetable });
  } catch (e) {}
});

router.route("/").get((req, res) => {
  Timetable.find()
    .then((timetable) => res.json(timetable))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  Timetable.findById(req.params.id)
    .then((timetable) => res.json(timetable))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Timetable.findByIdAndDelete(req.params.id)
    .then(() => res.json("timetable deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").put(async (req, res) => {
  let timetableId = req.params.id;
  const update = await Timetable.findByIdAndUpdate(timetableId, req.body);
  res.status(200).send({ status: "Timetable updated", user: update });
});

module.exports = router;
