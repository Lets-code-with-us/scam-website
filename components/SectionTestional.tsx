import TestimonialOne from "./Testinomal";
import React from 'react'

function SectionTestional() {
  return (
    <>
        <h2 className="text-4xl font-sans font-bold text-center mt-32">Testimonials</h2>
    <div className="grid grid-cols-2 justify-center items-center mt-16 px-10 mb-10">
        {Array.from({ length: 4 }).map((_, i) => (
            <TestimonialOne key={i} />
            )
            )}
        
    </div>
            </>
  )
}

export default SectionTestional