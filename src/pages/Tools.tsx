import { motion } from "framer-motion"

import Tool from "../components/Tool"

import { ToolsImage, WaveImage } from "../assets"

const Tools = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="tools">
      <img
        src={WaveImage}
        alt="WaveImage"
        className="w-full rotate-180 -mt-1"
      />
      <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse lg:justify-between lg:py-16">
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="lg:mr-32 flex flex-col justify-center items-center"
        >
          <img src={ToolsImage} alt="tools" className="w-64 my-8 lg:w-80" />
          <h1 className="my-8 text-4xl font-bold text-blue-500">My Tools</h1>
        </motion.div>
        <motion.div
          viewport={{ once: true }}
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }}
          className="flex flex-col justify-evenly items-center lg:ml-32"
        >
          <div className="rounded-3xl bg-blue-500 mb-8 flex flex-col justify-start items-center m-4">
            <h1 className="text-white mt-4">Languages & Tools</h1>
            <div className="w-full text-white flex justify-center items-center">
              <ul className="mx-2">
                <Tool src="https://skillicons.dev/icons?i=html" alt="html" />
                <Tool src="https://skillicons.dev/icons?i=css" alt="css" />
              </ul>
              <ul className="mx-2">
                <Tool src="https://skillicons.dev/icons?i=js" alt="js" />
                <Tool src="https://skillicons.dev/icons?i=ts" alt="ts" />
              </ul>
              <ul className="mx-2">
                <Tool src="https://skillicons.dev/icons?i=dart" alt="dart" />
                <Tool src="https://skillicons.dev/icons?i=py" alt="py" />
              </ul>
              <ul className="mx-2">
                <Tool src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
                <Tool src="https://skillicons.dev/icons?i=git" alt="git" />
              </ul>
            </div>
          </div>
          <div className="rounded-3xl bg-blue-500 mb-8 flex flex-col justify-start items-center m-4">
            <h1 className="text-white mt-4">Libraries</h1>
            <div className="w-full text-white flex justify-center items-center">
              <ul className="mx-2">
                <Tool src="https://skillicons.dev/icons?i=react" alt="react" />
                <Tool
                  src="https://skillicons.dev/icons?i=tailwind"
                  alt="tailwind"
                />
              </ul>
              <ul className="mx-2">
                <Tool
                  src="https://skillicons.dev/icons?i=express"
                  alt="express"
                />
                <Tool
                  src="https://skillicons.dev/icons?i=electron"
                  alt="electron"
                />
              </ul>
              <ul className="mx-2">
                <Tool
                  src="https://skillicons.dev/icons?i=flutter"
                  alt="flutter"
                />
                <Tool
                  src="https://skillicons.dev/icons?i=materialui"
                  alt="mui"
                />
              </ul>

              <ul className="mx-2">
                <Tool src="https://skillicons.dev/icons?i=redux" alt="redux" />
                <Tool
                  src="https://skillicons.dev/icons?i=threejs"
                  alt="threejs"
                />
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
      <img src={WaveImage} alt="WaveImage" className="w-full -mb-1" />
    </div>
  )
}
export default Tools
