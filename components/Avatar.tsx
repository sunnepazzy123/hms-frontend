"use client"
import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className="avatar">
    <div className="w-24 rounded">
      <Image 
        src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
        height={50}
        width={50}
        alt={''}
         />
    </div>
  </div>
  )
}

export default Avatar