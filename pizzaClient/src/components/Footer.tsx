
function Footer() {

  return (
    <div className="flex justify-between h-[10vh] bg-black bg-cover px-3 md:px-24">
        <div className="flex justify-center items-center">
            <h1 className="text-base md:text-3xl text-white font-bold uppercase font-heading">Tony's Pizza - est. 1976</h1>
        </div>
        <div className="flex gap-3 md:gap-8 justify-center items-center">
            <h1 className="text-sm md:text-xl cursor-pointer text-white uppercase font-dancing">Jobs</h1>
            <h1 className="text-sm md:text-xl cursor-pointer text-white uppercase font-dancing">About</h1>
            <h1 className="text-sm md:text-xl cursor-pointer text-white uppercase font-dancing">Contact</h1>
            <h1 className="text-sm md:text-xl cursor-pointer text-white uppercase font-dancing">Newsletter</h1>
        </div>
    </div>
  )
}

export default Footer