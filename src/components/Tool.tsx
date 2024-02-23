import { motion } from "framer-motion"

type ToolProps = {
  src: string
  alt: string
}

const Tool = (props: ToolProps) => {
  return (
    <motion.li
      className="m-2 mb-4 bg-white p-2 rounded-xl cursor-pointer"
      whileHover={{ scale: 1.2, rotate: 360, transition: { duration: 0.8 } }}
    >
      <img src={props.src} alt={props.alt} />
    </motion.li>
  )
}
export default Tool
