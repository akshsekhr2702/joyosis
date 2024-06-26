import mongoose from "mongoose";
import connectDb from '../../../../config/db'
import User from '../../../../model/user'
import { NextResponse } from "next/server";

export async function POST(req,res) {
  let {email,password} =await req.json()

  if(!email || !password){
    return new NextResponse(JSON.stringify("Something went wrong"),{status:404})
  }

  await connectDb()

  const isExist = await User.findOne({email})

  if(isExist){
    return new NextResponse(JSON.stringify("Logined"),{status:404})
  }
  else{
    return new NextResponse(JSON.stringify("Wrong Credentials"),{status:404})
  }

}