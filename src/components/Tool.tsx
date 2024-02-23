type ToolProps = {
  src: string
  alt: string
}

const Tool = (props: ToolProps) => {
  return (
    <li className="m-2 mb-4 bg-white p-2 rounded-xl">
      <img src={props.src} alt={props.alt} />
    </li>
  )
}
export default Tool
