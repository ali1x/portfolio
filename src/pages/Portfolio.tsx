import { Fade } from "react-reveal"

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="bg-blue-500 h-32 w-full flex flex-col justify-center items-center">
        <Fade bottom>
          <h1 className="text-white text-base md:text-2xl font-bold">
            Projects Are Still Under Development
          </h1>
          <p className="text-white">I will upload them soon.</p>
        </Fade>
      </div>
    </div>
  )
}
export default Portfolio
