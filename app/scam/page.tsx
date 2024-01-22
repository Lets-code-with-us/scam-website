import React from 'react'
import Scam from "@/components/Scam"
function page() {
  return (
    <div className='flex flex-col items-center justify-center'>
        <Scam value={"fit"} url={"http://localhost:4000"}/>
        <Scam value={"fit1"} url={"http://localhost:4010"}/>
    </div>
  )
}

export default page