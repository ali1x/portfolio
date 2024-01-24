import { Fade } from 'react-reveal'

import { WaveImage, ContactImage } from "../assets"

const Contact = () => {

  

  return (
    <div id="contact">
      <img src={WaveImage} alt="WaveImage" className="rotate-180 w-full" />
      <div className="flex flex-col justify-center items-center my-4">
        <div>
          <img src={ContactImage} alt="ContactImage" className="w-64 my-8" />
        </div>
        <Fade bottom>
        <h1 className="text-2xl font-bold text-blue-500 my-8">Don't hesitate, Contact Me!</h1>
        <div className="bg-white rounded-lg p-4 m-4 flex justify-center items-center flex-wrap">
          <a href="mailto:alifuadabbas2@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-500 w-72 rounded-lg m-4 p-2 flex justify-between items-center cursor-pointer">
              <span className="material-symbols-outlined text-white">mail</span>
              <h1 className="text-white p-1 m-2 rounded-lg">
                alifuadabbas2@gmail.com
              </h1>
            </div>
          </a>
          <a href="tel:00963997231105" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-500 w-72 rounded-lg m-4 p-2 flex justify-between items-center cursor-pointer">
              <span className="material-symbols-outlined text-white">call</span>
              <h1 className="text-white p-1 m-2 rounded-lg">
                +963-997-231-105
              </h1>
            </div>
          </a>
          <a href="https://t.me/devaliabbas" target="_blank" rel="noopener noreferrer">
            <div className="bg-blue-500 w-72 rounded-lg m-4 p-2 flex justify-between items-center cursor-pointer">
              <span className="material-symbols-outlined text-white">send</span>
              <h1 className="text-white p-1 m-2 rounded-lg">
                Telegram
              </h1>
            </div>
          </a>
          <a href="https://alidev.eu.org/Ali_F._Abbas_Resume.pdf">
            <div className="bg-blue-500 w-72 rounded-lg m-4 p-2 flex justify-between items-center cursor-pointer">
              <span className="material-symbols-outlined text-white">download</span>
              <h1 className="text-white p-1 m-2 rounded-lg">
                Take a look at my résumé
              </h1>
            </div>
          </a>
        </div>
        </Fade>
      </div>
    </div>
  )
}
export default Contact
