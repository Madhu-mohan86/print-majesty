import React from 'react'
import adithya from './images/Adithya.png'
import pepe from './images/pepe (2).png'
import dmart from './images/dmart.png'

export default function Aboutus(){
    return (
      <div className='relative bg-black top-32'>
        <h1 className='lg:text-4xl xl:text-6xl ml-24 font-Poppins font-semibold text-grey underline underline-offset-8 decoration-redc w-fit'>About-Us</h1>
        {/* Content */}
        <div className='w-hull h-fit text-center mx-20 lg:px-10 xl:px-28 lg:py-16 xl:py-20'>
        <p className='text-grey lg:text-lg xl:text-2xl font-Inter font-bold tracking-wide'>We stand amidst the paramount organizations engaged
        in Printed Labels, Hang Tags and Stickers. These products
        are offered to the clients in a variety of sizes, shapes,
        designs and patterns as per their requirements. With
        transparent business policies and ethical strategies, we
        have been offering these products and services at highly
        competitive rates. We believe that attaining complete client satisfaction is
        our first priority. Therefore, we have employed highly
        qualified professionals, who take every required step to
        provide our clients with defect-free products and
        services.</p>
        </div>
        

        {/* clients */}

        <div className='flex justify-center'>
            <div className='border-2 border-grey p-5'>
            <h1 className='font-Inter font-bold text-xl text-redc'>Top companies as our clients</h1>
            </div>
        </div>

        {/* Logos */}  {/*nNeed to align logos*/}

        <div className='lg:ml-10 xl:ml-44 mt-16 lg:space-x-14 xl:space-x-44 flex flex-row mb-10'>
        <div className='w-[360px] h-[180px]'>
        <img src={adithya} alt=''/>
        </div>
        <div className='w-[360px] h-[180px] -mt-8'>
        <img src={pepe} alt=''/>
        </div>
        <div className='w-[360px] h-[180px] mt-5'>
        <img src={dmart} alt=''/>
        </div>
        </div>
      </div>
    )
}
