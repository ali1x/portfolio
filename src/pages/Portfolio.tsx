import { PortfolioImg } from "../assets"

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="bg-blue-500 w-full flex flex-col justify-center items-center">
        <img src={PortfolioImg} alt="portfolio" className="w-64 lg:w-80 mb-4" />
        <h1 className="text-white text-base md:text-2xl font-bold mb-4">
          My Portfolio Projects
        </h1>
        <p className="text-white">Here's some of my works ...</p>
      </div>
      <div></div>
    </div>
  )
}
export default Portfolio
