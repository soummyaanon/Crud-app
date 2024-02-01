const mongoose=require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/usercrudapp").then(()=>{
    console.log("connetion succesfulll");
}).catch((e)=>{
    console.log(e);
})


const Schema= new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dateOfBirth: Date,
    address: String,
    phoneNumber: String,
    admissionDate: Date,
    course: String
  });

const Usermodel = mongoose.model("User",Schema);

module.exports =Usermodel;