import { AboutImage } from "../assets"

const About = () => {
  return (
    <div
      className="bg-blue-500 flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:py-16"
      id="about"
    >
      <img src={AboutImage} alt="AboutImage" className="w-64 mt-4 lg:ml-32 lg:w-80" />
      <div className="flex flex-col justify-center items-center lg:mr-32">
        <h1 className="mb-4 mt-8 text-white text-2xl font-bold">About Me</h1>
        <h2 className="text-white font-bold text-sm md:text-lg">
          A Front-end React Developer from Syria 📍
        </h2>
        <p className="text-justify text-sm md:text-lg mx-8 my-4 max-w-96 text-white font-light">
          I'm a quick learner and passionate junior front-end web developer. I
          love solving coding challenges and stay updated on the latest tech
          trends. Ready to bring my adaptability and creativity to enhance user
          experiences.
        </p>
        <div className="flex mb-4">
          <a
            href="tel:00963997231105"
            className="text-white border-2 px-4 py-2 rounded-lg mx-4 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Call Me
          </a>
          <a
            href="mailto:alifuadabbas2@gmail.com"
            className="text-blue-500 animate-pulse bg-white px-4 py-2 rounded-lg mx-4 font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  )
}
export default About
