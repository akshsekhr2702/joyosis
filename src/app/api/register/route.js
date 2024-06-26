import { NextResponse } from "next/server"
import connectDb from "../../../../config/db"
import bcrypt from 'bcryptjs'
import User from "../../../../model/user"

// export function GET() {
//   return NextResponse.json({msg:"Gli"})
// }

export async function POST(req,res) {
  let {username,email,password} = await req.json()
  console.log(username,password,email)
  if(!username || !email || !password){
    return new NextResponse(JSON.stringify("Something went wrong"),{status:404})
  }

  await connectDb()

  const isExist = await User.findOne({email})

  if(isExist){
    return new NextResponse(JSON.stringify("User already Exit"),{status:404})
  }
  
  let hashPass = await bcrypt.hash(password,10)
  let newUser = await User.create({username,email,password:hashPass})

  try {
    await newUser.save()
    return new NextResponse(JSON.stringify({msg:"Registered!!"}),{status:202})
  } catch (error) {
    console.log(error)
    return new NextResponse(JSON.stringify({error}),{status:404})
  }

}