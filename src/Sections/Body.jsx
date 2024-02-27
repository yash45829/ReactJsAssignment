import { useEffect, useState } from "react";
import pcimage from "../assets/download 1.png";
import SubMenuBtn from "../Components/Buttons/SubMenuBtn";
import BannerCard from "../Components/Cards/BannerCard";
import SmallCard from "../Components/Cards/SmallCard";
import SignUpForm from "../Components/SignUpForm";
import RatingCard from "../Components/Cards/RatingCard.jsx";
import ViewBtn from "../Components/Buttons/ViewBtn";
import { MdOutlineDone } from "react-icons/md";
import CheckPoint from "../Components/CheckPoint";

function Body() {
  // cards data state
  const [smCards, setSmCards] = useState([]);
  const [lgCards, setLgCards] = useState([]);

  //   fetching cards data from jsonBlob
  async function loadCards() {
    // large card data fetching
    const responseOne = await fetch(
      "https://jsonblob.com/api/jsonBlob/1211270496976232448"
    );
    const lgCardsData = await responseOne.json();
    setLgCards(lgCardsData);
    // small card data fetching
    const responseTwo = await fetch(
      "https://jsonblob.com/api/jsonBlob/1211519852761440256"
    );
    const smCardsData = await responseTwo.json();
    setSmCards(smCardsData);
  }

  useEffect(() => {
    loadCards();
  }, []);
  return (
    <>
      <div className="bg-blue-50 my-0 border">
        <div className=" h-full w-[60%] mx-auto">
          {/* main headline  */}
          <h1 className="font-semibold text-4xl my-2 ">
            Best Website Builders in the US
          </h1>
          {/* timestamp  */}
          <div className="border-t border-b my-4 py-1 text-gray-800">
            Last Updated - February 20,2022 Advertising Disclosure
          </div>
          {/* sub menu buttons  */}
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            <SubMenuBtn value={"Tools"} />
            <SubMenuBtn value={"AWS Builder"} />
            <SubMenuBtn value={"Start Build"} />
            <SubMenuBtn value={"Buils Supplies"} />
            <SubMenuBtn value={"Tooling"} />
            <SubMenuBtn value={"BlueHosting"} />
          </div>

          {/* large cards  */}
          <div>
            {lgCards.map((element) => (
              <BannerCard
                key={element.id}
                image={element.image}
                heading={element.heading}
                description={element.description}
                highlights={element.highlights}
                rating={element.rating}
              />
            ))}
          </div>

          {/* other similar odd card  */}
          <div className="sm:flex my-4 sm:gap-4 bg-white py-4 px-4 rounded-lg hover:shadow-lg transition-all">
            <div className=" sm:w-[25%] text-center flex flex-col justify-around items-center ">
              <img
                src={pcimage}
                alt={pcimage}
                className="mx-auto my-auto scale-125"
              />
              <p className="my-auto">Builder</p>
            </div>
            <div className="sm:w-[50%]  flex flex-col gap-y-2">
              <p className="text-gray-700">
                <span className="font-semibold ">CDK Responsive Builder-</span>{" "}
                An extensive library of widgets
              </p>
              <h2 className="font-bold text-black">Main highlights</h2>
              <div className="ml-8 py-2 px-4 bg-pink-200 rounded-lg">
                <h3>
                  <span className="bg-gray-50 text-blue-800 w-fit rounded-md px-2 py-0.2 mx-1">
                    9.9
                  </span>
                  Building Responsive
                </h3>
                <h3>
                  <span className="bg-gray-50 text-blue-800 w-fit rounded-md px-2 py-0.2 mx-1">
                    8.9
                  </span>
                  Cool
                </h3>
                <h3>
                  <span className="bg-gray-50 text-blue-800 w-fit rounded-md px-2 py-0.2 mx-1">
                    8.9
                  </span>
                  Docs
                </h3>
              </div>
              <div>
                <h1 className="font-semibold">Why we love it</h1>
                <ul>
                  <CheckPoint value={"Documentation"} />
                  <CheckPoint value={"Easy use"} />
                  <CheckPoint value={"Out of Box"} />
                </ul>
              </div>
              <button className="from-neutral-200 w-full px-2 py-1 text-left rounded-lg text-blue-600 hover:underline transition-all ">
                Show more
              </button>
            </div>
            <div className="sm:w-[25%]  flex flex-col justify-between items-center gap-y-8 px-2 py-4 ">
              <RatingCard rating={"9.1"} word={"Very Good"} />
              <ViewBtn value={"View"} />
            </div>
          </div>


          {/* related deals container  */}
          <div className="my-8">
            <h1 className="text-xl font-semibold text-gray-800 my-4">
              Related deals you might like for{" "}
            </h1>
            {/* small cards  */}
            <div className="flex flex-col sm:flex-row gap-4">
              {smCards.map((element, index) => (
                <SmallCard key={index} element={element} />
              ))}
            </div>
          </div>
          {/* signup form  */}
          <SignUpForm />
        </div>
      </div>
    </>
  );
}

export default Body;
