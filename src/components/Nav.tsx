import { useState } from "react"

import Menu from "./Menu"

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => {
    setMenuOpen((prev: boolean) => !prev)
  }

  return (
    <div className="my-4 w-full md:flex md:items-center">
      <div className="h-full flex justify-between md:justify-start md:items-center items-center md:w-1/2">
        <div className="h-full flex justify-center items-center">
          <code className="md:text-2xl h-full text-xl font-bold ml-6 md:ml-12 bg-gradient-to-r from-purple-500 to-blue-500 inline-block text-transparent bg-clip-text">{`<Ali F. Abbas />`}</code>
        </div>
        <span
          className="material-symbols-outlined text-blue-500 cursor-pointer mr-6 md:hidden"
          onClick={toggleMenu}
        >
          menu
        </span>
      </div>
      <div className={`w-full flex justify-center items-center md:w-1/2 md:flex md:mt-0 ${menuOpen ? 'mt-4' : 'hidden'}`}>
        <Menu />
      </div>
    </div>
  )
}
export default Nav
