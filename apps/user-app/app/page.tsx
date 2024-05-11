import {PrismaClient} from "@repo/db/client"
import { NextResponse } from "next/server"

const client = new PrismaClient();

export const GET = async () =>{
  await client.user.create({
    data:{
      name: "Darish",
      email: "dk@gmail.com"
    }
  })
  return NextResponse.json({
    message: "OK!"
  })
}