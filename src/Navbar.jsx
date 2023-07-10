import React from "react";

export default function Navbar(){
return(
    <div className="lg:h-[55px] xl:h-[100px] lg:p-2 xl:p-5 lg:px-5 xl:px-10  xl:text-3xl flex justify-between">
      <div className="overflow-hidden">
        <img className="lg:h-[40px] xl:h-[50px]" src="https://drive.google.com/uc?id=1VX1XSGWmdgXhnIT1ADDVovtJfmRAXtvP" alt=""/>
      </div>
      <div className="flex space-x-44 lg:mr-28 xl:mr-44 text-grey font-bold">
        <button className="font-Roboto_con">Home</button>
        <button className="font-Roboto_con">Products</button>
        <button className="font-Roboto_con">Ecosystem</button>
        <button className="font-Roboto_con">Contact Us</button>
      </div>
    </div>
)
}