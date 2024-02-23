import { useState, useEffect } from "react"

import Menu from "./Menu"

type NavProps = {
  isModeDark: boolean
  setIsModeDark: React.Dispatch<React.SetStateAction<boolean>>
}

const Nav = (props: NavProps) => {
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
      className={`fixed top-0 left-0 h-16 w-full z-20 shadow-lg bg-[#e5e5f7] dark:border-b-[1px] dark:border-dark-four dark:bg-dark-one transition-all duration-200 ease-linear ${
        isScrollingDown ? "-translate-y-16" : "translate-y-0"
      }
      `}
    >
      <div className="h-full flex justify-between items-center mx-6">
        <code className="md:text-2xl text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">{`<Ali F. Abbas />`}</code>
        <div className="flex justify-between items-center">
          <span
            className="material-symbols-outlined text-blue-500 dark:text-dark-four cursor-pointer mr-4 md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? "close" : "menu"}
          </span>
          <span
            className="dark:text-dark-four text-blue-500 material-symbols-outlined cursor-pointer md:hidden"
            onClick={() => props.setIsModeDark((prev) => !prev)}
          >
            {props.isModeDark ? "dark_mode" : "light_mode"}
          </span>
        </div>
        <ul className="flex justify-between items-center w-96 max-md:hidden mr-10">
          <Menu setIsMenuOpen={setIsMenuOpen} />
          <span
            className="material-symbols-outlined cursor-pointer text-blue-500 dark:text-dark-four"
            onClick={() => props.setIsModeDark((prev) => !prev)}
          >
            {props.isModeDark ? "dark_mode" : "light_mode"}
          </span>
        </ul>
      </div>
      <div
        className={`bg-[#e5e5f7]/80 dark:bg-dark-one/80 shadow-lg pb-2 md:hidden fixed left-0 w-full -z-10 transition-all duration-300 ease-linear
      ${isMenuOpen && !isScrollingDown ? "-translate-y-1 opacity-100" : "-translate-y-72 opacity-0"}
      `}
      >
        <ul className="flex flex-col justify-evenly items-center -z-10">
          <Menu setIsMenuOpen={setIsMenuOpen} />
        </ul>
      </div>
    </div>
  )
}
export default Nav
