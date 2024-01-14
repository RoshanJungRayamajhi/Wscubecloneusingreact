import React from 'react'
import photo from "../assets/photo.png"

const page2 = () => {
  return (
    <div className='m-20 max-w-screen-xl mx-auto md:flex gap-10'>
        <div className='w-full basis-[40%]'>
            <img className=' bg-center bg-cover rounded-[20px]' src={photo} alt="" />
        </div>
        <div className='w-full basis-[60%] flex items-center '>
           <div className=' w-[70%]  md:w-full pl-28'> <h2 className=' capitalize text-green-400 tracking-tighter text-[3vw] font-semibold'>Learn from expert</h2>
            <p className=' leading-none my-3 text-[3.5vw] md:text-[2vw] font-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque voluptatum, debitis ab nobis enim quos asperiores sunt odit error.</p>
            <button className=' hover:bg-green-400 bg-black p-3 text-white font-medium rounded-md mt-2'>Get started</button></div>
        </div>
    </div>
  )
}

export default page2