import { RxHamburgerMenu } from "react-icons/rx";
import { BsYoutube } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  
  return (
    <div className="w-full bg-[#0c0c0c]">
      <div className="flex justify-between h-14 w-[95%] mx-auto">
        <div className="flex items-center gap-8" >
         <RxHamburgerMenu className="text-xl"/>
          <div className="flex items-center gap-1">
            <BsYoutube className="text-3xl text-red-600"></BsYoutube>
            <span className="text-xl">Youtube</span>
          </div>
        </div>
        <div className="">
          <form action="">
            <div className="flex items-center p-4 h-10 border-[0.6px] border-neutral-700 rounded-full overflow-hidden">
              <input type="text" placeholder="Search" className="w-96 text-lg text-zinc-300 placeholder-neutral-500 bg-[#0c0c0c] focus:outline-none"/>
              <button className="w-16 flex items-center justify-center border-l-[1px] border-neutral-700 h-10">
                <CiSearch className="text-2xl text-neutral-200"/>
              </button>
            </div>
          </form>
        </div>

        <div className=""> 
          {}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
