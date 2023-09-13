

"use client"
import React from 'react'

interface InputProps {
    register: (name: string) => {}
}

const Input = ({register, name = ''}: any) => {
  return (
    <div>
      <p className='text-lg p-1 capitalize'>{name}</p>
       <input 
       type="text" 
       placeholder="Type here" 
       className="input input-bordered input-primary bg-white w-full max-w-xs"
      {...register(`${name}`)}
        />
        <p className='p-1 text-red-700'>error</p>
    </div>
 
  )
}

export default Input