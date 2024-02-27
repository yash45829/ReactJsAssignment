import { MdOutlineDone } from "react-icons/md"; 

function CheckPoint ({value}){

    return (
     <>
        <div className="flex items-center gap-x-2 text-gray-700"><MdOutlineDone className="text-blue-800  rounded-full bg-blue-200"/><span> {value}</span></div>

     </>
    )
}

export default CheckPoint;