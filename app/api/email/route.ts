import { NextRequest,NextResponse } from "next/server";
import { sendEmail } from "@/util/mailService";


export async function POST(request: NextRequest) {
    try {
        const res= await request.json();
        await sendEmail(res);
        return NextResponse.json({message:"success"},{status:200});

    } catch (error: any) {
        return NextResponse.json({error:error},{status:500});

        
    }
}