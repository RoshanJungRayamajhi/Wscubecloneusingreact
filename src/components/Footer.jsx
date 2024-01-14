import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className=' max-w-screen-xl mx-auto px-10'>
        <div className=' flex gap-6 mb-10'>
       <CiFacebook size="2em" className=' rounded-full w-fit'/>
       <FaInstagram size="2em" className=' rounded-full w-fit'/>
      <FaTwitterSquare size="2em" className=' rounded-full w-fit'/>
      <CiLinkedin size="2em" className=' rounded-full w-fit'/>
       
        </div>
    </div>
  )
}

export default Footer