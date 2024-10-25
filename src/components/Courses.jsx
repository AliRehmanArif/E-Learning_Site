import React from 'react'
import Course1 from '../images/course1.jpg'
import Course2 from '../images/course2.jpg'
import Course3 from '../images/course3.jpg'

const Courses = () => {
  return (
    <div className='mx-5 pt-6'>
      <div className='flex flex-col items-center pb-12'>
        <h1 className='text-xl font-bold text-[#06BBCC] pb-1'>COURSES</h1>
        <p className='text-2xl'>Popular Courses</p>
      </div>
      <div>
        <div className='relative'>
            <div style={{backgroundImage: `url(${Course1})`}} className=''>
            </div>
            <div className='flex items-center absolute'>
                <button className='text-white bg-[#06BBCC] rounded-l-3xl p-2 mr-[1px]'>Read More</button>
                <button className='text-white bg-[#06BBCC] rounded-r-3xl p-2'>Join Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
