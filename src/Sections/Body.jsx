import { useEffect, useState } from "react";
import SubMenuBtn from "../Components/Buttons/SubMenuBtn";
import BannerCard from "../Components/Cards/BannerCard";
import SmallCard from "../Components/Cards/SmallCard";
import SignUpForm from "../Components/SignUpForm";

function Body (){
   const [smCards,setSmCards] = useState([]);
   const [lgCards,setLgCards] = useState([]);

  async function loadCards (){
  const responseOne = await fetch("https://jsonblob.com/api/jsonBlob/1211270496976232448");
  const lgCardsData = await responseOne.json();
  setLgCards(lgCardsData);
  const responseTwo = await fetch("https://jsonblob.com/api/jsonBlob/1211519852761440256");
  const smCardsData = await responseTwo.json();
  setSmCards(smCardsData);
console.log(smCards);
   }
   
   useEffect(()=>{
      loadCards();
   },[])
    return (

     <>
      <div className="bg-blue-50 my-0 border">
     <div className=" h-full w-[60%] mx-auto">
        <h1 className="font-semibold text-4xl my-2 ">Best Website Builders in the US</h1>
        <div className="border-t border-b my-4 py-1 text-gray-800">
            Last Updated - February 20,2022   Advertising Disclosure  
        </div>
        <div className="flex gap-x-2 flex-wrap gap-y-2">
            <SubMenuBtn value={"Tools"}/>
            <SubMenuBtn value={"AWS Builder"}/>
            <SubMenuBtn value={"Start Build"}/>
            <SubMenuBtn value={"Buils Supplies"}/>
            <SubMenuBtn value={"Tooling"}/>
            <SubMenuBtn value={"BlueHosting"}/>
        </div>
         
         {/* detail card  */}
         <div >

         
         {lgCards.map((element) => (
          <BannerCard  key={element.id} image={element.image} heading={element.heading} description={element.description} highlights={element.highlights} rating={element.rating}/>)
         )}
         </div>
         <div className="my-8">
            <h1 className="text-xl font-semibold text-gray-800 my-4">Related deals you might like for </h1>
         <div className="flex flex-col sm:flex-row gap-4">
            {
                smCards.map((element ,index)=> (
                    <SmallCard key={index} element={element}/>
                ) )
            }
         </div>
         </div>
       
         <SignUpForm/>
        </div>
      
        </div>
        </>
    )
}

export default Body;