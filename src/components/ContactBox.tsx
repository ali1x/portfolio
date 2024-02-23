type ContactBoxProps = {
  href: string
  iconName: string
  name: string
}

const ContactBox = (props: ContactBoxProps) => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <div className="bg-blue-500 w-72 rounded-lg m-4 p-2 flex justify-between items-center cursor-pointer">
        <span className="material-symbols-outlined text-white">
          {props.iconName}
        </span>
        <h1 className="text-white p-1 m-2 rounded-lg">{props.name}</h1>
      </div>
    </a>
  )
}
export default ContactBox
