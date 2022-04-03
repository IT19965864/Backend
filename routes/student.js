const router =require('express').Router();
let Student=require("../models/student");



router.route("/add").post((req,res)=>{
    const stuName=req.body.stuName;
    const nic=req.body.nic;
    const gender=req.body.gender;
    const address=req.body.address;
    const email=req.body.email;
    const mobile=Number(req.body.mobile);
    
    const newStudent=new Student({
        stuName,
        nic,
        gender,
        address,
        email,
        mobile
    })

    newStudent.save()
        .then(() =>{
            res.json('Student added!')
        }) 
        .catch(err => res.status(400).json('Error: ' + err));
    
});

router.route('/').get((req,res)=>{
    Student.find()
        .then(students=>res.json(students))
        .catch(err=> res.status(400).json('Error:'+ err));

});


router.route('/:id').get((req, res) => {
    Student.findById(req.params.id)
      .then(students => res.json(students))
      .catch(err => res.status(400).json('Error: ' + err));
  });
   
  router.route('/:id').delete((req, res) => {
    Student.findByIdAndDelete(req.params.id)
      .then(() => res.json('Student deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  router.route('/update/:id').put(async(req, res) => {
    let studentId=req.params.id;
    const{stuName,nic,gender,address,email,mobile}=req.body;
    const updateStudent= {
        stuName,
        nic,
        gender,
        address,
        email,
        mobile
    }

       const update=await Student.findByIdAndUpdate(studentId,updateStudent);
        res.status(200).send({status:"user updated",user:update})
      
  });


router.route("/get/:id").get(async(req,res)=>{
    let studentId=req.params.id;
    const student=await Student.findById(studentId)
    .then(()=>{
        res.status(200).send({status:"student fetched",user:user})
    }).catch(err => res.status(400).json('Error: ' + err));

})


module.exports=router;