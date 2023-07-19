import React from 'react'
import './marquee.css'

const Marquee = () => {
  return (
    <div className="marqeeContainer">
        <marquee direction="left" scrollamount="5">Welcome to my portfolio website &#128525;, scroll till end to
            know more about me ! </marquee>
    </div>
  )
}

export default Marquee