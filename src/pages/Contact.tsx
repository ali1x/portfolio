import ContactBox from "../components/ContactBox"

import { WaveImage, ContactImage } from "../assets"

const Contact = () => {
  return (
    <div id="contact">
      <img src={WaveImage} alt="WaveImage" className="rotate-180 w-full" />
      <div className="flex flex-col justify-center items-center mt-4">
        <div>
          <img src={ContactImage} alt="ContactImage" className="w-64 my-8" />
        </div>
        <h1 className="text-2xl font-bold text-blue-500 my-8">
          Don't hesitate, Contact Me!
        </h1>
        <div className="bg-white dark:bg-dark-one rounded-lg p-4 m-4 flex justify-center items-center flex-wrap">
          <ContactBox
            href="mailto:alifuadabbas2@gmail.com"
            iconName="mail"
            name="alifuadabbas2@gmail.com"
          />
          <ContactBox
            href="tel:00963997231105"
            iconName="call"
            name="+963-997-231-105"
          />
          <ContactBox
            href="https://t.me/devaliabbas"
            iconName="send"
            name="Telegram"
          />
          <ContactBox
            href="/Ali_F._Abbas_Resume.pdf"
            iconName="download"
            name="Take a look at my résumé"
          />
        </div>
      </div>
    </div>
  )
}
export default Contact
