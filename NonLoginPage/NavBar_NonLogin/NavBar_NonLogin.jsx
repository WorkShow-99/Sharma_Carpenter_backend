
import { useState } from "react"
import icon from "../../src/assets/image.svg"

export const NavBar_NonLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (


    <>
    
<nav className="fixed top-0 left-0 z-50 w-full bg-transparent ">

  <div className="flex h-20 items-center   justify- pl-[5%] ">

  <div className="flex items-center gap-3">

<icon style={{ color: 'blue', width: '50px' }} />
    {/* <img
      src={icon}
      alt="Logo"
      className="h-50 w-50 object-contain"
    /> */}

    <h2 className="text-2xl font-bold">
      WorkShow
    </h2>

  </div>

  <button
    type="button"
    className="rounded-lg border border-gray-300 px-3 py-2  text-sm font-semibold text-gray-700 md:hidden"
    onClick={() => setMenuOpen((prev) => !prev)}
  >
    Menu
  </button>

  <div className="hidden items-center gap-4 md:flex fixed right-[5%] top-0 translate-y-0 mt-2 z-50 bg-green-200 rounded-l-full px-4 py-2 shadow-lg transition-transform duration-300 ease-in-out">

    <a
      href="/login"
      className="rounded-xl px-5 py-3 font-semibold text-gray-700 transition hover:text-black hover:scale-105"
    >
      Login
    </a>

    <a
      href="/signup"
      className="rounded-xl bg-black px-6 py-3 font-semibold text-white transition h hover:scale-105 "
    >
      Sign Up
    </a>

  </div>

  </div>

  {menuOpen && (
    <div className="flex flex-col gap-2 border-t border-gray-200 bg-white px-[5%] py-4 md:hidden mt-2">
      <a href="/login" className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
        Login
      </a>
      <a href="/signup" className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
        Sign Up
      </a>
      <a href="/about" className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
        About
      </a>
      <a href="/discover" className="rounded-lg px-4 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
        Discover
      </a>
    </div>
  )}

</nav>
    </>

)}




