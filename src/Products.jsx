import React from 'react'
import wash from'./images/washcare.jpg'
import barcode from './images/barcode.jpg'
import tag from './images/ww.jpg'
import { faIndustry, faMagnifyingGlass, faQrcode ,faShirt, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Products(){
    return (
      <div className='relative xl:mt-20 lg:mt-10 bg-black h-full'>
        <h1 className='lg:text-4xl xl:text-6xl ml-24 font-Poppins font-semibold text-grey underline underline-offset-8 decoration-redc w-fit'>Products</h1>
        {/*Image section */}
        <div className='mt-20 ml-24 mr-10 space-x-14 flex flex-row'>
          <div className='lg:w-[90%] xl:w-[40%]'>
            <img className='lg:border-4 xl:border-6 border-grey grayscale rounded-xl h-full xl:w-full' src={wash} alt=''/>
          </div>
          {/* label section */}
          <div className='lg:ml-0 xl:w-[100%] pr-2'>
            <h1 className='font-Poppins lg:text-3xl xl:text-5xl text-redc w-fit'>Labels</h1>
            <p className='font-Inter mt-7 lg:font-bold xl:font-extrabold lg:text-xl xl:text-3xl  text-grey'>We have in our store Labels and Stickers, which are optimum in quality. Our range
            comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed  Labels and Barcode
            Stickers. Designer Labels, Fancy Ribbons, Clothing Labels, Printed  Labels and Barcode
            Stickers.</p>
          </div>
        </div>
          {/* Sticker section */}
        <div className='mt-32 ml-24 mr-10 space-x-14 flex flex-row '>
          <div className='xl:w-[100%]'>
          <h1 className='font-Poppins lg:text-3xl xl:text-5xl text-redc w-fit'>Stickers</h1>
          <p className='font-Inter mt-7 lg:font-bold xl:font-extrabold lg:text-xl xl:text-3xl  text-grey'>We have in our store Labels and Stickers, which are optimum in quality. Our range
          comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed  Labels and Barcode
          Stickers. Designer Labels, Fancy Ribbons, Clothing Labels, Printed  Labels and Barcode
          Stickers.</p>
          </div>
          <div className='lg:w-full xl:w-[30%]'>
            <img className='lg:border-4 xl:border-6 border-grey grayscale rounded-xl h-fit' src={barcode} alt=''/>
          </div>
        </div>

        <div className='mt-32 ml-24 mr-10 space-x-14 flex flex-row'>
        <div className='lg:w-[90%] xl:w-[40%]'>
          <img className='lg:border-4 xl:border-6 border-grey grayscale rounded-xl h-full' src={tag} alt=''/>
        </div>
        {/* label section */}
        <div className='lg:ml-0 xl:w-[100%] pr-2'>
          <h1 className='font-Poppins lg:text-3xl xl:text-5xl text-redc w-fit'>Hang Tags</h1>
          <p className='font-Inter mt-7 lg:font-bold xl:font-extrabold lg:text-xl xl:text-3xl  text-grey'>We have in our store Labels and Stickers, which are optimum in quality. Our range
          comprises Designer Labels, Fancy Ribbons, Clothing Labels, Printed  Labels and Barcode
          Stickers. Designer Labels, Fancy Ribbons, Clothing Labels, Printed  Labels and Barcode
          Stickers.</p>
        </div>
      </div>

      {/*Search and Categories*/}
      <div className='flex justify-center mt-32'>
      <div className='border-[3px] border-grey w-fit  lg:rounded-[40px] xl:rounded-[50px] flex flex-row space-x-7 px-10 py-5'>
      <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white",}} className='xl:mt-2' size="2xl" />
      <p className='tracking-wide text-dark_grey lg:text-3xl xl:text-5xl font-Roboto lg:font-bold xl:font-extrabold'>Search  Products</p>
      </div>
      </div>

      {/*category*/}

      <div class="relative flex my-20 mx-20 items-center">
        <div class="flex-grow border-t-[3px] border-grey"></div>
           <span class="tracking-wide font-Roboto font-extrabold text-xl mx-24 text-redc">Confused ?   choose your domain or take a short quiz</span>
        <div class="flex-grow border-t-[3px] border-grey"></div>
      </div>

      {/*ICONS*/}
      <div className='flex flex-row space-x-20 justify-center'>
        <div className='h-36 w-36 rounded-lg border-2 border-grey px-8 py-8'>
         <FontAwesomeIcon icon={faShirt} style={{color:"#F9D978"}} size='4x' />
        </div>
        <div className='h-36 w-36 rounded-lg border-2 border-grey px-8 py-8'>
         <FontAwesomeIcon icon={faQrcode} style={{color:"#F9D978"}} size='4x' />
        </div>
        <div className='h-36 w-36 rounded-lg border-2 border-grey px-8 py-8'>
         <FontAwesomeIcon icon={faIndustry} style={{color:"#F9D978"}} size='4x' />
        </div>
        <div className='h-36 w-36 rounded-lg border-2 border-grey px-8 py-8'>
         <FontAwesomeIcon icon={faTruckFast} style={{color:"#F9D978"}} size='4x' />
        </div>
      </div>

      {/*Label */}
      <div className='mt-5 tracking-wide flex flex-row justify-center lg:space-x-40 xl:space-x-32'>
       <p className='text-white lg:text-xl xl:text-2xl font-Inter font-bold'>Clothing</p>
       <p className='text-white lg:text-xl xl:text-2xl font-Inter font-bold'>Billing</p>
       <p className='text-white lg:text-xl xl:text-2xl font-Inter font-bold'>Industrial</p>
       <p className='text-white lg:text-xl xl:text-2xl font-Inter font-bold'>Logistics</p>
         
      </div>
      </div>
    
    )
}

export default Products
