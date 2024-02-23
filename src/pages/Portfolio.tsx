import { PortfolioImg } from "../assets"
import ProjectCard from "../components/ProjectCard"

import { Espace, Hoobank } from "../assets"

const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="bg-blue-500 w-full flex flex-col justify-center items-center">
        <img src={PortfolioImg} alt="portfolio" className="w-64 lg:w-80 mb-4" />
        <h1 className="text-white text-base md:text-2xl font-bold mb-4">
          My Portfolio Projects
        </h1>
        <p className="text-white">Here's some of my works ...</p>
      <div className="flex lg:flex-row flex-col">
        <ProjectCard
          img={Espace}
          name="ElectraSpace"
          text="A project for a local freelancing service."
          tech={['html', 'css', 'ts', 'react', 'tailwind']}
          link="https://espace-eight.vercel.app/"
        />
        <ProjectCard
          img={Hoobank}
          name="HooBank"
          text="A project for a modern bank service."
          tech={['html', 'css', 'ts', 'react', 'tailwind']}
          link="https://hoobank-seven-self.vercel.app/"
        />
      </div>
      </div>
    </div>
  )
}
export default Portfolio
