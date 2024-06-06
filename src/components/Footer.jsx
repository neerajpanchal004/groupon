import React from 'react'

const Footer = () => {
  return (
    <>
      <p className='py-5 px-16  bg-slate-100 text-xs'><b className='text-2xl font-bold w-96 mx-5'>Popular on Groupon</b> Groupon is your place for savings and discovery while exploring fun activities in your city and around the country. Click here for Popular Categories.</p>
      {/* upper */}
      <div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-5 lg:px-10 py-3 lg:py-5 gap-5 bg-slate-900 text-white'>
          <div className='flex flex-col gap-5'>
            <p><b>Customer support</b></p>
            <p>Help Center</p>
            <p>Refund Policies</p>
            <p>Report Infringement</p>
            <p>Merchant Class Action Settlement Notice</p>
          </div>

          <div className='flex flex-col gap-5'>
            <p><b>Sell On Groupon</b></p>
            <p>Join Groupon's Marketplace</p>
            <p>Run a Groupon Campaign</p>
            <p>How Groupon Works for Merchants</p>
            <p>Advertise Your Campaign</p>
            <p>Affiliate Program</p>
            <p>Vendor Code of Conduct</p>

          </div>

          <div className='flex flex-col gap-5'>
            <p><b>Company</b></p>
            <p>About</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>About</p>
            <p>Invester Relations</p>
            <p>Management Team</p>

          </div>

          <div className='flex flex-col gap-5'>
            <p><b>Quick Links</b></p>
            <p>Treat yourself</p>
            <p>Things to do</p>
            <p>Coupons</p>
            <p>Gifts for Occasions</p>
      

          </div>
        </div>
      </div>
      
    </>
  )
}

export default Footer
