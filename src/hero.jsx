import React from 'react';


export default function Hero() {
    return (
      <div className='relative h-auto w-full  bg-black'>

      {/*image div*/}
        <div className="relative lg:left-1/2 xl:left-[55%]  lg:top-10 xl:top-24 w-fit h-fit">
          <img className="lg:h-[555px] 2xl:h-[700px] md:h-[450px]" src="https://drive.google.com/uc?id=1vi3AFh6tNvYdTmpQDLJiuA--Uat5ZcXJ" alt=""/>
        </div>

     {/* Catchy sentence*/}
        <div className="relative left-24 lg:-top-[370px] xl:-top-[420px] h-fit w-fit text-center leading-10 lg:text-4xl xl:text-7xl text-grey font-Poppins font-medium tracking-tight">
         <h1 className="">Unleash  Your  Brand  Power <br/></h1><h1 className="mt-5"> with Tag's</h1>
        </div>

      {/*Take a tour button*/}
      
        <div className="relative lg:-top-[300px] xl:-top-[350px] rounded-md left-24 bg-grey w-fit">
          <button className="px-3 py-1.5 flex flex-row ">
            <p className="font-Roboto_con font-extrabold text-left xl:text-3xl">Take&#160;a&#160;tour!</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="xl:h-7 xl:w-7 lg:h-5 lg:w-5 ml-3 mt-1" viewBox="0 0 100 100" id="arrow"><switch><g><path d="M12 52h62.344L53.172 73.172a4 4 0 1 0 5.657 5.656l28-28a4 4 0 0 0 0-5.656l-28-28A3.989 3.989 0 0 0 56 16a4 4 0 0 0-2.828 6.828L74.344 44H12a4 4 0 0 0 0 8z"></path></g></switch></svg>
          </button>
        </div>
     </div>
    )
}

