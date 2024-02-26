function SignUpForm (){

    return (
     <div className="py-2 my-8 flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl text-gray-800 font-semibold">Sign up and get exclusive special deals</h1>
        <form className="">
            <input type="text" className="rounded-s-lg py-2 px-2 focus:outline-none focus:shadow"/>
            <button className="rounded-e-lg bg-blue-600 text-white py-2 px-2"> SignUp</button>
        </form>
     </div>
    )
}

export default SignUpForm;