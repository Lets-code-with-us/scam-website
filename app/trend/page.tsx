import React from 'react'
import TrendingCard from '@/components/TrendingCard'
function page() {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      {Array.from({ length: 10 }).map((_, i) => (
        <TrendingCard key={i} />
      )
      )}
    </div>
  )
}

export default page