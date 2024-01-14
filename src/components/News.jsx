import React from 'react'

const News = () => {
  return (
    <div className=' w-full bg-[#2699fb] py-20'>
        <div className=' max-w-screen-xl mx-auto md:flex gap-16'>
            <div className=' h-[15vh]  basis-[60%]'>
                <h1 className='text-[6vw] md:text-[3.3vw] font-semibold whitespace-nowrap'>Wants to learn latest I.T skill?</h1>
                <h3  className='text-[3vw] md:text-[1.8vw] font-medium mt-3'>Sinup for newsletter from wecube.</h3>
            </div>
            <div className=' py-5'>
                    <input  className='p-2 rounded-[10px] text-[3vw] md:text-[1.6vw]' type="text" placeholder='Enter Email' />
                    <input className=' ml-6 p-2 rounded-[10px] bg-black text-white' type="submit" value="Notify me" />
                <h3 className='mt-6 text-[2.8vw] font-base md:text-[1.6vw]'>We care about  protection of data read about our <span className='text-green-900'>privacy police</span></h3>
            </div>
        </div>
    </div>
  )
}

export default News