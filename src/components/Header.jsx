import Navbar from './Navbar'
import { useState } from "react";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 z-40 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr_3fr_1fr]">
        <h1>
          <a href="/" className="logo mt-[20rem]">
            <img src="/images/logo.png" width={60} height={60} alt="Adreil Babalola" />
          </a>
        </h1>

        <div className="relative justify-self-center">
          <button
            className="menu-btn md:hidden"
            onClick={() => setNavOpen(!navOpen)}
          >
            <span className="material-symbols-rounded text-white text-3xl">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>

        <a href="#contact" className="text-white btn btn-secondary max-md:hidden md:justify-self-end">
          Contact Me
        </a>
      </div>
    </header>
  )
}

export default Header  // ✅ Make sure this line is at the bottom!