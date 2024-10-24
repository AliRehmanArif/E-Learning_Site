import React from 'react'
import Student from '../images/student.jpg'

const Body = () => {
  return (
    <div style={{ backgroundImage: `url(${Student})` }} className="bg-cover bg-center h-96 w-full">
      <h1 className='text-white'>Hello</h1>
    </div>

  )
}

export default Body
