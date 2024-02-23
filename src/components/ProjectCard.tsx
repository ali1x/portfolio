import { motion } from "framer-motion"

type ProjectCardProps = {
  img: string
  name: string
  text: string
  tech: string[]
  link: string
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ y: 200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
      className="bg-white rounded-2xl flex flex-col justify-center items-center p-4 m-4"
    >
      <img
        src={props.img}
        alt="project"
        className="w-72 rounded-2xl border-[12px] border-blue-500 my-2"
      />
      <h1 className="font-bold text-2xl my-2">{props.name}</h1>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-bold text-lg my-2"
      >
        Live Demo
      </a>
      <p className="my-2">{props.text}</p>
      <div className="flex justify-between w-full my-2">
        {props.tech.map((item) => (
          <img
            src={`https://skillicons.dev/icons?i=${item}`}
            alt="tool"
            key={item}
          />
        ))}
      </div>
    </motion.div>
  )
}
export default ProjectCard
