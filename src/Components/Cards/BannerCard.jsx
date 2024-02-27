import ViewBtn from "../Buttons/ViewBtn";
import RatingCard from "../Cards/RatingCard";

function BannerCard({ image, heading, description, highlights, rating }) {
  return (
    <>
      <div className="sm:flex my-4 sm:gap-4 bg-white py-4 px-4 rounded-lg hover:shadow-lg transition-all">
        <div className=" sm:w-[25%] text-center flex flex-col justify-around items-center ">
          <img src={image} alt={image} className="mx-auto my-auto" />
          <p className="my-auto">Builder</p>
        </div>
        <div className="sm:w-[50%]  flex flex-col gap-y-2">
          <p className="text-gray-700">
            <span className="font-semibold ">{heading}</span> {description}
          </p>
          <h2 className="font-bold text-black">Main highlights</h2>
          <p className="pl-8 text-gray-700">{highlights}</p>
          <button className="from-neutral-200 w-full px-2 py-1 text-left rounded-lg text-blue-600 hover:underline transition-all ">
            Show more
          </button>
        </div>
        <div className="sm:w-[25%]  flex flex-col justify-between items-center gap-y-8 px-2 py-4 ">
          <RatingCard rating={rating.rating} word={rating.word} />
          <ViewBtn value={"View"} />
        </div>
      </div>
    </>
  );
}

export default BannerCard;
