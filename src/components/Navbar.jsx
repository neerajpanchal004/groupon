import React from 'react'
import { CiLocationOn, CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdCircleNotifications, MdFavoriteBorder, MdQrCodeScanner } from 'react-icons/md';


const Navbar = () => {
  return (
    <>
    <div>
        <div className='flex justify-around lg:justify-end items-center gap-2 lg:gap-5 text-xs py-2'>
            <p className='flex gap-2 items-center justify-center'><MdQrCodeScanner/>Get the Groupon App</p>
            <p className='flex gap-2 items-center justify-center'><MdFavoriteBorder/>My Wishlist</p>
            <p>Sell On Groupon</p>
            <p>Help</p>
            <p>Sign Up</p>
        </div>
        <nav className='flex py-5 px-14 shadow-sm justify-between items-center'>
            <p className='text-3xl text-green-600 font-bold'>GROUPON</p>
            <select className='border-[0.5px] border-black p-1 rounded-md hidden lg:block'><option>Categories</option></select>
           <div className='lg:flex justify-between items-center py-1 px-3 rounded-2xl bg-slate-100 hidden'>
           <CiSearch color='slate' size={25}/><input className='bg-transparent' type="text" placeholder="Search Groupon" /> 
           <CiLocationOn color='slate' size={25}/><input className='bg-transparent' type="text" placeholder="Chicago" />
           </div>
            <div className='flex gap-5'>
            <CiShoppingCart size={30}/>
            <MdCircleNotifications size={30}/>
            <select className='border-[0.5px] border-black p-1 rounded-md' ><option>Sign In</option></select>

            </div>
            
            

      



        </nav>
    </div>
    </>
  )
}

export default Navbar