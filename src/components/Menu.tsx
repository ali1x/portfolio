const Menu = () => {
  return (
    <ul
      className="w-full h-full max-w-[500px] flex justify-evenly items-center"
    >
      <a href="#about">
        <li className="text-blue-500 hover:text-purple-500 cursor-pointer">
          About
        </li>
      </a>
      <a href="#tools">
        <li className="text-blue-500 hover:text-purple-500 cursor-pointer">
          Tools
        </li>
      </a>
      <a href="#portfolio">
        <li className="text-blue-500 hover:text-purple-500 cursor-pointer">
          Portfolio
        </li>
      </a>
      <a href="#contact">
        <li className="text-blue-500 hover:text-purple-500 cursor-pointer">
          Contact
        </li>
      </a>
    </ul>
  )
}

export default Menu
