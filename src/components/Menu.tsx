type MenuProps = {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Menu = (props: MenuProps) => {
  return (
    <>
      <li
        className="text-blue-500 dark:text-dark-four font-bold hover:text-slate-500 cursor-pointer my-2"
        onClick={() => props.setIsMenuOpen(false)}
      >
        <a href="#home">Home</a>
      </li>
      <li
        className="text-blue-500 dark:text-dark-four font-bold hover:text-slate-500 cursor-pointer my-2"
        onClick={() => props.setIsMenuOpen(false)}
      >
        <a href="#about">About</a>
      </li>
      <li
        className="text-blue-500 dark:text-dark-four font-bold hover:text-slate-500 cursor-pointer my-2"
        onClick={() => props.setIsMenuOpen(false)}
      >
        <a href="#tools">Tools</a>
      </li>
      <li
        className="text-blue-500 dark:text-dark-four font-bold hover:text-slate-500 cursor-pointer my-2"
        onClick={() => props.setIsMenuOpen(false)}
      >
        <a href="#portfolio">Portfolio</a>
      </li>
      <li
        className="text-blue-500 dark:text-dark-four font-bold hover:text-slate-500 cursor-pointer my-2"
        onClick={() => props.setIsMenuOpen(false)}
      >
        <a href="#contact">Contact</a>
      </li>
    </>
  )
}

export default Menu
