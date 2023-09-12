"use client"
import React from 'react'

const Toggle = () => {
  return (
    <div className="flex flex-col">
  <div className="form-control w-52">
    <label className="cursor-pointer label">
      <span className="label-text">Remember me</span> 
      <input type="checkbox" className="toggle toggle-primary" checked />
    </label>
  </div>
</div>
  )
}

export default Toggle