import React from "react";
import { getServerSession } from "next-auth";
import {option} from "@/app/api/auth/[...nextauth]/options"
import Link  from "next/link";


async function page() {
  const session = await getServerSession(option);
 return (
  <>
  <div className="flex flex-col items-center justify-center">
  {
                session ? ( 
                <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>) : (<Link href="/api/auth/signin">Login</Link>)
            }
  </div>
 </>
 );
}


export default page;