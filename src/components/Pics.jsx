import React from 'react'
import image1 from '../images/background.jpg'

export default function Pics() {
  return (
    <div>
      <img src={image1}  alt="" style={{ width: '100%', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}/>
    </div>
  )
}

