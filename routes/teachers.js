const router = require("express").Router();
let Teacher = require("../models/teacher");

router.route("/add").post(async (req, res) => {
  //   console.log(req.body);
  const teacherName = req.body.teacherName;
  const teacherNic = req.body.teacherNic;
  const teacherGender = req.body.teacherGender;
  const teacherBirthDate = req.body.teacherBirthDate;
  const teacherEmail = req.body.teacherEmail;
  const teacherMobile = Number(req.body.teacherMobile);
  const teacherSubject = req.body.teacherSubject;
  const teacherGrade = Number(req.body.teacherGrade);

  const newTeacher = new Teacher({
    teacherName,
    teacherNic,
    teacherGender,
    teacherBirthDate,
    teacherEmail,
    teacherMobile,
    teacherSubject,
    teacherGrade,
  });
  //   try {
  //     let request = await Teacher.create(req.body);
  //     res.json(request);
  //   } catch (err) {
  //     res.json(err);
  //   }

  newTeacher
    .save()
    .then(() => {
      res.json("student addes succesfully");
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

// .catch(err=> res.status(400).json('Error:'+ err));
router.route("/").get((req, res) => {
  Teacher.find()
    .then((teachers) => {
      res.json(teachers);
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let teacherId = req.params.id;
  const teacherName = req.body.teacherName;
  const teacherNic = req.body.teacherNic;
  const teacherGender = req.body.teacherGender;
  const teacherBirthDate = req.body.teacherBirthDate;
  const teacherEmail = req.body.teacherEmail;
  const teacherMobile = Number(req.body.teacherMobile);
  const teacherSubject = req.body.teacherSubject;
  const teacherGrade = Number(req.body.teacherGrade);

  const updateTeacher = {
    teacherName,
    teacherNic,
    teacherGender,
    teacherBirthDate,
    teacherEmail,
    teacherMobile,
    teacherSubject,
    teacherGrade,
  };
  console.log(updateTeacher);
  Teacher.findByIdAndUpdate(teacherId, updateTeacher)
    .then((user11) => {
      res.status(200).send({ status: "teacher update", user: updateTeacher });
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

// .then(() => {
//     res.status(200).send({ status: "user deleted" });
//   })
//   .catch((err) => {
//     console.log(err.message);
//     res
//       .status(500)
//       .send({ status: "error with delete user", error: err.message });
//   });

router.route("/delete/:id").delete(async (req, res) => {
  let teacherId = req.params.id;
  await Teacher.findByIdAndDelete(teacherId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  let teacherId = req.params.id;
  const teacher = await Teacher.findById(teacherId)
    .then((rest) => {
      res.status(200).send({ status: "user fetched", user: rest });
    })
    .catch((err) => {
      res.status(400).json("Error:" + err);
    });
});

// kk

// router.route('/').get((req,res)=>{
//     Student.find()
//         .then(students=>res.json(students))
//         .catch(err=> res.status(400).json('Error:'+ err));

// });

// router.route('/:id').get((req, res) => {
//     Student.findById(req.params.id)
//       .then(students => res.json(students))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//   router.route('/:id').delete((req, res) => {
//     Student.findByIdAndDelete(req.params.id)
//       .then(() => res.json('Student deleted.'))
//       .catch(err => res.status(400).json('Error: ' + err));
//   });

//   router.route('/update/:id').put(async(req, res) => {
//     let studentId=req.params.id;
//     const{sname,nic,gender,address,email,mobile}=req.body;
//     const updateStudent= {
//         sname,
//         nic,
//         gender,
//         address,
//         email,
//         mobile
//     }

//        const update=await Student.findByIdAndUpdate(studentId,updateStudent);
//         res.status(200).send({status:"user updated",user:update})

//   });

// router.route("/get/:id").get(async(req,res)=>{
//     let studentId=req.params.id;
//     const student=await Student.findById(studentId)
//     .then(()=>{
//         res.status(200).send({status:"student fetched",user:user})
//     }).catch(err => res.status(400).json('Error: ' + err));

// })

module.exports = router;
