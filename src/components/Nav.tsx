import { useState, useEffect } from "react"

import Menu from "./Menu"

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [prevScroll, setPrevScroll] = useState(window.scrollY)
  const [isScrollingDown, setIsScrollingDown] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev: boolean) => !prev)
  }

  useEffect(() => {
    window.onscroll = () => {
      const currScroll = window.scrollY
      if (currScroll > prevScroll) {
        setIsScrollingDown(true)
      } else {
        setIsScrollingDown(false)
      }
      setPrevScroll(currScroll)
    }
  }, [prevScroll])

  return (
    <div
      className={`fixed top-0 left-0 h-16 w-full z-20 shadow-lg bg-[#e5e5f7] ${
        isScrollingDown
          ? "animate-[navUp_200ms_linear_forwards]"
          : "animate-[navDown_200ms_linear_forwards]"
      }
      `}
    >
      <div className="h-full flex justify-between items-center mx-6">
        <code className="md:text-2xl text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">{`<Ali F. Abbas />`}</code>
        <span
          className="material-symbols-outlined text-blue-500 cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? 'close' : 'menu' }
        </span>
        <ul className="flex justify-between items-center w-80 max-md:hidden">
          <Menu />
        </ul>
      </div>
      <div className={`bg-[#e5e5f7] shadow-lg pb-2 md:hidden fixed top-16 left-0 w-full transition-all duration-500 -z-10
      ${
        isMenuOpen && !isScrollingDown
        ? 'top-16'
        : '-top-44'
      }
      `}>
        <ul className="flex flex-col justify-evenly items-center -z-10">
          <Menu />
        </ul>
      </div>
    </div>
  )
}
export default Nav
