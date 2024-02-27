import ViewBtn from "../Buttons/ViewBtn";

function SmallCard({ element }) {
  return (
    <>
      <div className="w-full sm:w-fit py-2 px-4 bg-white rounded-lg hover:shadow-lg transition-all ">
        <img src={element.image} className="scale-75" alt="" />
        {/* tags  */}
        {element.tags && (
          <div className="flex gap-2 my-1">
            <p className="bg-blue-200 text-blue-800 w-fit rounded-md px-2 py-0.2 text-sm">{`${element.tags?.discount}% off`}</p>
            <p className="bg-blue-200 text-blue-800 w-fit rounded-md px-2 py-0.2 text-sm">
              {element.tags?.time}
            </p>
          </div>
        )}
        {/* heading  */}
        <h1 className="font-semibold text-center">{element.heading}</h1>
        {/* description  */}
        <p className="text-gray-600">{element.description}</p>
        {/* price  */}
        <div className="">
          <span className="text-gray-500 px-1">{`$${element.reducedPrice}`}</span>{" "}
          <span className="text-sm text-gray-400 px-1 ">{`$ ${element.actualPrice}`}</span>
          <span className="text-red-600 px-1">{`${element.discount}% off`}</span>
        </div>
        <ViewBtn value={"View Deal"} />
      </div>
    </>
  );
}

export default SmallCard;
