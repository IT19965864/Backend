const mongoose=require('mongoose');
const { stringify } = require('nodemon/lib/utils');
const Schema = mongoose.Schema;

const studentSchema=new Schema({
    sname:{
        type:String,
        required:true

    },
    nic:{
        type:String,
        required:true
        

    },
    gender:{
        type:String,
        required:true

    },
    address:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    mobile:{
        type:Number,
        required:true

    },
})
const Student=mongoose.model('Student',studentSchema);

module.exports=Student;