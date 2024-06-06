import React from 'react'

const HeroSection = () => {
    return (
        <div className='m-10'>
            <p className='text-2xl'><b>Hi there,</b> here's what's trending today</p>
            {/* grid */}
            <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 m-5'>

                {/* cart one */}
                <div>
                    <img src="https://img.grouponcdn.com/deal/23HESgfuYBsq7eW6CJudWLXgCW8X/23-700x420/v1/c349x211.webp" alt="image-1" className='rounded-lg w-full' />
                    <h2 className='font-bold'>90-Minute Chicago Architecture Boat Tour & Cruise for O...</h2>
                    <p>900 South Wells Street, Chicago•0.8 mi 4.8 7158 Ratings</p>
                    <div className='flex gap-1'><p className='text-xl font-bold line-through'>$49</p> <p>From</p> <p className='text-xl font-bold text-green-600'>$29</p><p className='px-2 py-1 bg-green-200 rounded-lg'>40% OFF</p></div>
                    <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$24.94</b> with code PROMO</p><p></p></div>
                    <p>Tours and Boats - Architecture Tour - Chicago</p>
                    <p>12590+ bought</p>
                </div>
                {/* cart one */}

                {/* cart two */}
                <div>
                    <img src="https://img.grouponcdn.com/deal/2ePr211dzQfnmPApdkYVqx7fz4pH/2e-1024x619/v1/c349x211.webp" alt="image-1" className='rounded-lg w-full' />
                    <h2 className='font-bold'>90-Minute Chicago Architecture Boat Tour & Cruise for O...</h2>
                    <p>900 South Wells Street, Chicago•0.8 mi 4.8 7158 Ratings</p>
                    <div className='flex gap-1'><p className='text-xl font-bold line-through'>$49</p> <p>From</p> <p className='text-xl font-bold text-green-600'>$29</p><p className='px-2 py-1 bg-green-200 rounded-lg'>40% OFF</p></div>
                    <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$24.94</b> with code PROMO</p><p></p></div>
                    <p>Tours and Boats - Architecture Tour - Chicago</p>
                    <p>12590+ bought</p>
                </div>
                {/* cart two */}


                {/* cart three */}
                <div>
                    <img src="https://img.grouponcdn.com/deal/sRBhS1YUqxKGFNoU6o6YGT/IMAGE_Valvoline-Instant-Oil-Change-Kansas-City_MO-700x420/v1/c349x211.webp" alt="image-1" className='rounded-lg w-full' />
                    <h2 className='font-bold'>90-Minute Chicago Architecture Boat Tour & Cruise for O...</h2>
                    <p>900 South Wells Street, Chicago•0.8 mi 4.8 7158 Ratings</p>
                    <div className='flex gap-1'><p className='text-xl font-bold line-through'>$49</p> <p>From</p> <p className='text-xl font-bold text-green-600'>$29</p><p className='px-2 py-1 bg-green-200 rounded-lg'>40% OFF</p></div>
                    <div className='flex gap-1 text-blue-600'><p className='text-xl'><b>$24.94</b> with code PROMO</p><p></p></div>
                    <p>Tours and Boats - Architecture Tour - Chicago</p>
                    <p>12590+ bought</p>
                </div>
                {/* cart three */}
            </div>
            {/* grid */}
        </div>
    )
}

export default HeroSection