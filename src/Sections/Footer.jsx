function Footer (){

    return (
     <main className=" flex flex-col pt-8 pb-24 sm:flex-row justify-start w-full mb-0   sm:justify-between sm:items-start bg-slate-950 text-gray-400">
        <div className="flex justify-evenly sm:w-[50%] ">
        <div>
        <h2 className="font-semibold">CATEGORIES</h2>
        <ul>
            <li className=" text-sm my-2">Web Builder</li>
            <li className=" text-sm my-2">Hosting</li>
            <li className=" text-sm my-2">Data center</li>
            <li className=" text-sm my-2">Robotic automation</li>
        </ul>
        </div>
        <div>
        <h2 className="font-semibold">CONTACT</h2>
        <ul>
            <li className=" text-sm my-2">Contact</li>
            <li className=" text-sm my-2">Privacy policy</li>
            <li className=" text-sm my-2">Terms of service</li>
            <li className=" text-sm my-2">categories</li>
            <li className=" text-sm my-2">About</li>
        </ul>
        </div>
        </div>
        <div className=" sm:w-[50%] pl-4 " >
            
        <h2 className="font-semibold ">Location</h2>
        <ul>
            <li className=" text-sm my-2 ">United States</li>
        </ul>
      
        </div>
     </main>
    )
}

export default Footer;