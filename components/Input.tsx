
import React from 'react'

interface InputProps {
    register: (name: string) => {}
}

const Input = ({register, name = ''}: any) => {
  return (
    <input 
       type="text" 
       placeholder="Type here" 
       className="input input-bordered input-primary w-full max-w-xs"
      {...register(`${name}`)}
        />
  )
}

export default Input