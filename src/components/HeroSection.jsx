import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'



const HeroSection = () => {
  return (
    <div className='flex flex-col items-center mt-6  lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide'> VirtualR build tools <span className= 'bg-orange-500 text-transparent bg-clip-text' > for</span> <br /> <span className='bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text'> Developers </span> 
      </h1>

      <p className='mt-10 text-lg text-center text-neutral-500 max-w-4xl'>Empower your creativity and bring your VR app ideas to life with out intuitive development tools. Get started today and turn imagination into immersive reality!

      </p>
      <div className='flex justify-center my-10 gap-4'>
        <a href="#" className='rounded-md py-2 px-3 bg-orange-500'> Start for Free</a>
        <a href="#" className='rounded-md py-2 px-3 bg-transparent border p-2'> Documentation</a>
      </div>
      <div className='flex mt-10 justify-center'>
        <video 
        autoPlay
        loop
        muted
        className='rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4'
        >
            <source src={video1} type="video/mp4" />
            
        </video>
        <video 
        autoPlay
        loop
        muted
        className='rounded-lg w-1/3 border border-orange-700 shadow-orange-400 mx-2 my-4'
        >
            <source src={video2} type="video/mp4" />
            
        </video>
      </div>
    </div>
  )
}

export default HeroSection
