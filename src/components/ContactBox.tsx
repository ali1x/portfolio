import { motion } from "framer-motion"

type ContactBoxProps = {
  href: string
  iconName: string
  name: string
  time: number
}

const ContactBox = (props: ContactBoxProps) => {
  return (
    <motion.a
      viewport={{ once: true }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1, transition: { duration: props.time } }}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-blue-500 dark:bg-white w-72 rounded-lg m-4 p-2 flex justify-between items-center cursor-pointer">
        <span className="material-symbols-outlined text-white dark:text-blue-500">
          {props.iconName}
        </span>
        <h1 className="text-white dark:text-blue-500 p-1 m-2 rounded-lg">{props.name}</h1>
      </div>
    </motion.a>
  )
}
export default ContactBox
