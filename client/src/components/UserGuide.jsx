import React from 'react'
import {shift,keys, control } from '../assets'
const UserGuide = () => {
  return (
    <div className='howto-container'>
        <div className="flex gap-1 flex-wrap flex-1 text-gray-500 text-xs items-center">
            <img width='35px' src={shift} alt="" />
            <h1 className='text-black text-lg'>+</h1>
            <img width='40px' src={keys} alt="" />
            <p className="font-bold text-lg ml-2">:-</p><p> Change</p><p>the</p><p>position</p><p>of</p><p>Logo</p>
        </div>
        
        <div className="flex gap-1 mt-3 flex-wrap flex-1 text-gray-500 text-xs items-center">
            <img width='35px' src={control} alt="" />
            <h1 className='text-black text-lg'>+</h1>
            <img width='40px' src={keys} alt="" />
            <p className="font-bold text-lg ml-2">:-</p><p> Change</p><p>the</p><p>position</p><p>of</p><p>Full</p><p>texture</p>
        </div>
    </div>
  )
}

export default UserGuide