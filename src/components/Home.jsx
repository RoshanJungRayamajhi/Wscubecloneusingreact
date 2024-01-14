import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className=' w-full bg-[#2699fb] p-5  py-20 '>
        <div className=' max-w-screen-lg mx-auto flex flex-col items-center
         justify-center leading-none'>
            <h2 className='mt-9 text-2xl  md:text-4xl font-[600] tracking-tight'>Learn with us</h2>
            <h1 className=' m-9 text-nowrap text-[12vw] md:text-8xl font-semibold tracking-tighter text-white' >Grow with us.</h1>
            <h2 className='mt-8 text-nowrap text-[10vw] md:text-7xl font-semibold '>Learn   
          <span className=' w-fit'>  <Typed strings={["webdevelopments","Ethical hacking","Grpahic desighing"]}
            typeSpeed={100}
            backSpeed={120}
            loop={true}
            /></span>
            </h2>
        </div>
    </div>
  )
}

export default Hero