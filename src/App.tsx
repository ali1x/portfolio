import Nav from "./components/Nav"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Tools from "./pages/Tools"

const App = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Tools />
      <Portfolio />
      <Contact />
    </>
  )
}
export default App