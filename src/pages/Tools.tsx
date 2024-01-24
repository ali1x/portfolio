import { Fade } from "react-reveal"

import { ToolsImage, WaveImage } from "../assets"

const Tools = () => {
  return (
    <div className="flex flex-col justify-center items-center" id="tools">
      <img src={WaveImage} alt="WaveImage" className="w-full rotate-180" />
      <img src={ToolsImage} alt="tools" className="w-64 my-8" />
      <Fade bottom>
      <h1 className="mt-8 text-2xl font-bold text-blue-500">My Tools</h1>
      <div className="w-full flex flex-col justify-evenly items-center md:flex-row">
      <div className="rounded-3xl bg-blue-500 my-8 flex flex-col justify-start items-center">
        <h1 className="text-white mt-4">Languages & Tools</h1>
        <div className="w-full text-white flex justify-center items-center">
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=html" alt="html" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=css" alt="css" />
            </li>
          </ul>
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=js" alt="js" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=ts" alt="ts" />
            </li>
          </ul>
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=dart" alt="dart" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=py" alt="py" />
            </li>
          </ul>
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=git" alt="git" />
            </li>
          </ul>
        </div>
      </div>
      <div className="rounded-3xl bg-blue-500 my-8 flex flex-col justify-start items-center">
        <h1 className="text-white mt-4">Libraries</h1>
        <div className="w-full text-white flex justify-center items-center">
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=react" alt="react" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="tailwind" />
            </li>
          </ul>
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=express" alt="express" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=electron" alt="electron" />
            </li>
          </ul>
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=flutter" alt="flutter" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=materialui" alt="mui" />
            </li>
          </ul>
          <ul className="mx-2">
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=redux" alt="redux" />
            </li>
            <li className="m-2 mb-4 bg-white p-2 rounded-xl">
              <img src="https://skillicons.dev/icons?i=threejs" alt="threejs" />
            </li>
          </ul>
        </div>
      </div>
      </div>
      </Fade>
    </div>
  )
}
export default Tools
