import React from 'react'

const FathersDay = () => {
    return (
        <>
            <div className='p-10 bg-orange-100'>
                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-bold'>🔥 Father's Day</p>
                    <p className='text-2xl font-semibold'>1 of 3 </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5 mt-3  lg:mt-5'>
                    {/* cart one */}
                    <div>
                        <img src='https://img.grouponcdn.com/deal/vaeb81xLZE6yxkQsYHcc7jRURLD/va-700x420/v1/c349x211.webp' alt='image' className='rounded-lg w-full ' />
                        <p className='font-bold'>Fireworks or Sunset Cruise Options for One, Two, or Mor...</p>
                        <p>200 North Breakwater Access, Chicago•0.8 mi  4.4 3086 Ratings</p>
                        <div className='text-xl'><b className='line-through'>$32</b><b className='ml-2 line-through text-green-600'>$12</b></div>
                        <div className='text-red-500 text-xl'>From <b>$10.80</b> Limited Time</div>
                        <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$10.26</b> with code PROMO</p></div>
                        <p>Chicago Cruise Events</p>
                        <p>2510+ bought</p>

                    </div>
                    {/* cart one */}

                    {/* cart two */}
                    <div>
                        <img src='https://img.grouponcdn.com/deal/2SDFkFey3H9Ag4np4NATs5nRR8az/2S-580x348/v1/c349x211.webp' alt='image' className='rounded-lg w-full ' />
                        <p className='font-bold'>Two Hours of Bowling and Shoe Rentals for Two, Four, or...</p>
                        <p>200 North Breakwater Access, Chicago•0.8 mi  4.4 3086 Ratings</p>
                        <div className='text-xl'><b className='line-through'>$32</b><b className='ml-2 line-through text-green-600'>$12</b></div>
                        <div className='text-red-500 text-xl'>From <b>$10.80</b> Limited Time</div>
                        <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$10.26</b> with code PROMO</p></div>
                        <p>Chicago Cruise Events</p>
                        <p>2510+ bought</p>

                    </div>
                    {/* cart two */}

                    {/* cart three */}
                    <div>
                        <img src='https://img.grouponcdn.com/deal/2Va2atDUqWFdyyB3WC9bJgMhDEqT/2V-2048x1229/v1/c349x211.webp' alt='image' className='rounded-lg w-full ' />
                        <p className='font-bold'>1-Hour Axe-Throwing Session or 30-Minute Rage-Room Pack...</p>
                        <p>200 North Breakwater Access, Chicago•0.8 mi  4.4 3086 Ratings</p>
                        <div className='text-xl'><b className='line-through'>$32</b><b className='ml-2 line-through text-green-600'>$12</b></div>
                        <div className='text-red-500 text-xl'>From <b>$10.80</b> Limited Time</div>
                        <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$10.26</b> with code PROMO</p></div>
                        <p>Chicago Cruise Events</p>
                        <p>2510+ bought</p>

                    </div>
                    {/* cart three */}


                    {/* cart four */}
                    <div>
                        <img src='https://img.grouponcdn.com/deal/3i5wrWyYV9RtpVcatvTvKGGosEBc/3i-2048x1228/v1/c349x211.webp' alt='image' className='rounded-lg w-full ' />
                        <p className='font-bold'>$25 eGift Card to Krispy Kreme® (20% Off)</p>
                        <p>200 North Breakwater Access, Chicago•0.8 mi  4.4 3086 Ratings</p>
                        <div className='text-xl'><b className='line-through'>$32</b><b className='ml-2 line-through text-green-600'>$12</b></div>
                        <div className='text-red-500 text-xl'>From <b>$10.80</b> Limited Time</div>
                        <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$10.26</b> with code PROMO</p></div>
                        <p>Chicago Cruise Events</p>
                        <p>2510+ bought</p>

                    </div>
                    {/* cart four */}
                </div>
                <div className='flex justify-center mt-20'><button className='px-8 py-2 border-[1px] border-black bg-white rounded-md '>Show all</button></div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-5 m-5 lg:m-10' >

                {/* one */}
                <div className='rounded-lg pt-9 pb-4 px-14 text-white' style={{ backgroundImage: 'url(https://img.grouponcdn.com/sparta/2LoLjCZvFx1smZto7yofHuRHzFMF/2L-644x240.webp)' }}>
                    <p className='text-3xl font-bold mb-5'>Dad Deserves The Best</p>
                    <p>Show him he's your hero</p>
                    <p>with the perfect gift.</p>
                    <button className='px-3 py-2 border-[1px] border-white bg-transparent  rounded-md mt-10'>See Deals </button>
                </div>
                {/* one */}

                {/* two */}
                <div className='rounded-lg pt-9 pb-4 px-14 ' style={{ backgroundImage: 'url(https://img.grouponcdn.com/sparta/hvvKwHVfGvhLqfe1PeT8gZdqRxb/hv-592x240.webp)' }}>
                    <p className='text-3xl font-bold mb-5'>Shine Bright, Feel Light</p>
                    <p>Summer Ready: Fit & Fab</p>
                    <p>Deals</p>
                    <button className='px-3 py-2 border-[1px] border-black bg-transparent  rounded-md mt-10'>See Deals </button>
                </div>
                {/* two */}
            </div>
        </>
    )
}

export default FathersDay