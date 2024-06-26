import mongoose, { Schema } from "mongoose";


const User_Schema = new Schema({
  username:{
    type:String,
    required:true
  }
  , email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  comments:{
    type:String,
    
  }
})


const User = mongoose.models.User || mongoose.model('User',User_Schema)

export default User