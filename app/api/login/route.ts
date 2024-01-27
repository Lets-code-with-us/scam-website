import { NextRequest,NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig";

// dbConnect()
export async function GET(){

    try {
       return  NextResponse.json({"messsage":"connect db"})
        
    } catch (error) {
      return  NextResponse.json({"message":"error"},{"status":500})
    }

}