import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: {  
    type: String,
    required: true,
  },
  password:{
    type:String,
    required:true
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  course: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("User", userSchema);
export default user;
