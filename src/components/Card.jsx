import React from 'react'
import { MdOutlineGroups2 } from "react-icons/md";
import { GrGroup } from "react-icons/gr";

const Card = ({value,index}) => {
  return (
    <div className=' rounded-md p-4 flex flex-col items-center justify-start mt-16 md:m-6 h-[80%] w-full md:w-[30%] shadow-2xl hover:scale-105 duration-300'>
     {index === 0 && <MdOutlineGroups2 className='-mt-16' size="10em"/>}
     {index === 1 && <GrGroup className='-mt-16' size="8em"/>}
     {index === 2 && <GrGroup className='-mt-16' size="8em"/> }
    {/* <MdOutlineGroups2 className='-mt-20' size="10em"/> */}
    <h1 className='mt-3 text-4xl font-semibold'>{value.title}</h1>
    <h3  className='mt-10 text-5xl font-bold'>${value.price}</h3>
    <p className=' mt-12 text-xl font-medium leading-none  tracking-tighter'>{value.description}</p>
    <button className=' w-full text-xl font-bold p-3 bg-green-500 text-black rounded-md mt-[24%]'>Start Trail</button>
    
    </div>
  )
}

export default Card