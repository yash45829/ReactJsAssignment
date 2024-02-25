import MenuBtn from "../Components/Buttons/MenuBtn";
import {CiSearch} from 'react-icons/ci';

function Header (){

    return (
     <>
     <div className="w-full  bg-slate-950">
        <ul className="flex gap-x-6  justify-center items-center py-2">
              <li className="flex "><CiSearch className="text-black font-semibold bg-white h-8  rounded-s-lg "/> <input type="text" className="rounded-e-lg focus:outline-none " /></li>
              <li><MenuBtn value={"Categories"}/></li>
              <li><MenuBtn value={"Website Builders"}/></li>
              <li><MenuBtn value={"Todays Deals"}/></li>
        </ul>
     </div>
     </>
    )
}

export default Header;