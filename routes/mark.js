const router = require("express").Router();
let StudentMark = require("../models/mark");

router.route("/add").post((req, res) => {
  const nicno = req.body.nicno;
  const studName = req.body.studName;
  const stream = req.body.stream;
  const term = req.body.term;
  const chemMarks = Number(req.body.chemMarks);
  const physicsMarks = Number(req.body.physicsMarks);
  const bioMarks = Number(req.body.bioMarks);
  const mathsMarks = Number(req.body.mathsMarks);

  const newStudentMark = new StudentMark({
    nicno,
    studName,
    stream,
    term,
    chemMarks,
    physicsMarks,
    bioMarks,
    mathsMarks,
  });

  newStudentMark
    .save()
    .then(() => {
      res.json("Student Marks added!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").get((req, res) => {
  StudentMark.find()
    .then((studentmarks) => res.json(studentmarks))
    .catch((err) => res.status(400).json("Error:" + err));
});

router.route("/:id").get((req, res) => {
  StudentMark.findById(req.params.id)
    .then((studentmarks) => res.json(studentmarks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  StudentMark.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student Mark deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put(async (req, res) => {
  let studentMarkId = req.params.id;
  const {
    nicno,
    studName,
    stream,
    term,
    chemMarks,
    physicsMarks,
    bioMarks,
    mathsMarks,
  } = req.body;
  const updateStudent = {
    nicno,
    studName,
    stream,
    term,
    chemMarks,
    physicsMarks,
    bioMarks,
    mathsMarks,
  };

  const update = await StudentMark.findByIdAndUpdate(
    studentMarkId,
    updateStudentMark
  );
  res.status(200).send({ status: "user updated", user: update });
});

router.route("/get/:id").get(async (req, res) => {
  let studentMarkId = req.params.id;
  const studentmark = await StudentMark.findById(studentMarkId)
    .then(() => {
      res.status(200).send({ status: "student fetched", user: user });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
