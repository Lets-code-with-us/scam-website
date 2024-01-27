import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/util/mailService";
import { dbConnect } from "@/db/dbConfig";

// dbConnect()
export async function POST(request: NextRequest) {
  try {
    const requestBody = await request.json();
    await sendEmail(requestBody);
    return NextResponse.json({ message: "success" }, { status: 200 });
  } 
  catch (error: any) {
    console.error("Error in POST route:", error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
