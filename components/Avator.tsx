import React from 'react'
import { getServerSession } from 'next-auth'
import {option} from "@/app/api/auth/[...nextauth]/options"
import Link from 'next/link'


export default async function Avatar() {
  const session = await getServerSession(option)
  // if(!session) return <div>Please Login</div>

  return (
    <div className="flex items-center space-x-2">
      <img
        className="inline-block h-12 w-12 rounded-full"
        src={session?.user?.image || "https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"}
        alt="Dan_Abromov"
      />
      <span className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">{session?.user?.name}</span>
        <span className="text-sm font-medium text-gray-500">@{session?.user?.name}</span>
      </span>
    <Link href="/post">Create a New Post</Link>
    </div>
  )
}
