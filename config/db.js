import mongoose from "mongoose";

const connectDb = async()=>{
try {
  await mongoose.connect('mongodb://localhost:27017/User')
  console.log('Connected to Db')
} catch (error) {
  console.log(error)
}
}


export default connectDb