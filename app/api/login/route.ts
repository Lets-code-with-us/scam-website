import { NextRequest,NextResponse } from "next/server";

export async function GET(){
  
  try {
       return  NextResponse.json({"messsage":"connect db"})
        
    } catch (error) {
      return  NextResponse.json({"message":"error"},{"status":500})
    }

}