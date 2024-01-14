import React from 'react'
import Avatar from '@/components/Avator'
import SidebarOne from '@/components/SideBar'
function profile() {
  return (
    <div className='flex flex-col '>
<div className='flex flex-col items-center justify-center'>

        <Avatar/>
</div>
        <SidebarOne/>   
    </div>
  )
}

export default profile