import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/util/mailService";
// import { dbConnect } from "@/db/dbConfig";
// import Subscriber  from "@/model/newLetter.model";

export async function POST(request: NextRequest) {
    try {
    //   dbConnect()
    const requestBody = await request.json();
    // await Subscriber.create(requestBody);
    await sendEmail(requestBody);

    console.log(requestBody);

    // Respond with a success message
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    console.error('Error in POST route:', error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
