import React from "react";
import Navbar from "./Navbar";
import Hero from "./hero";
import Products from "./Products";
import Aboutus from "./About_us";


export default function Home(){
 return(
    <div className="bg-black">
    <Navbar/>
     <Hero/>
     <Products/>
     <Aboutus />
    </div>
 )
}