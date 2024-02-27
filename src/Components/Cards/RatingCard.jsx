import starimg from "../../assets/star5.png";

function RatingCard({ rating, word }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center w-full sm:max-w-fit from-neutral-200 px-2 py-4 sm:py-0.5 gap-y-4 rounded-lg text-blue-800 bg-blue-100 transition-all ">
        <p className="font-bold text-center ">{rating} </p>
        <p>{word}</p>
        <img src={starimg} alt="" />
      </div>
    </>
  );
}

export default RatingCard;
