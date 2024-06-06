import React from 'react'
import HeroSection from './HeroSection'
import FathersDay from './FathersDay'
import Popular from './Popular'
import Footer from './Footer'

const Main = () => {
  return (
    <>
    {/* green grid */}
    <div className='bg-green-200  px-10 py-2 font-bold text-green-700 flex justify-around text-center gap-5 mt-2'> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quae inventore</p>
        <hr className='border-[1px] border-green-700 h-[45px]' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quae inventore</p>
        <hr className='border-[1px] border-green-700 h-[45px]' />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat quae inventore</p>
    </div>
    {/* green grid complete */}
    <HeroSection/>

    <FathersDay/>
    <Popular/>
    <Footer/>
   
    </>
  )
}

export default Main