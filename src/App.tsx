import { useEffect, useState } from "react"

import Nav from "./components/Nav"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Tools from "./pages/Tools"

const App = () => {
  const [isModeDark, setIsModeDark] = useState<boolean>(
    localStorage.theme === "dark"
  )

  useEffect(() => {
    isModeDark ? (localStorage.theme = "dark") : (localStorage.theme = "")

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isModeDark])

  return (
    <>
      <Nav 
        isModeDark={isModeDark} 
        setIsModeDark={setIsModeDark} 
      />
      <Home />
      <About />
      <Tools />
      <Portfolio />
      <Contact />
    </>
  )
}
export default App
