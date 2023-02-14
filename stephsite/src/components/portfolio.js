import React from "react"
import Port1 from "../images/sheiseport1.png"
import Port2 from "../images/sheiseport2.png"
import Port3 from "../images/sheiseport3.png"
import Port4 from "../images/sheiseport4.png"
import Port5 from "../images/sheiseport5.PNG"
import Port6 from "../images/sheiseport6.PNG"
import './portfolio.css'



function Portfolio() {
    return (
  <div>

  <h2 className="text-8xl font-bold underline">Portfolio!</h2>    


  <section className="overflow-hidden text-gray-700 ">
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32 gallery w-full">
    <div className="flex flex-wrap m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img src={Port1}/>
        </div>
        
        <div className="w-full p-1 md:p-2">
        <img src={Port5}/>
        </div>
     
      
       
        
      </div>
      
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
        <img src={Port2}/>
        </div>
        <div className="w-1/2 p-1 md:p-2 ">
        <img src={Port3}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
        <img src={Port4}/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
        <img src={Port6}/>
        </div>
      </div>
      
        
     

    </div>
  </div>
</section>












  </div>
  
  
    );
  }

  export default Portfolio;
