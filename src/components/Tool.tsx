const Tool = (props: { alt: string, src: string }) => {
  return (
    <li className="m-2 mb-4 bg-white p-2 rounded-xl">
      <img src={props.src} alt={props.alt} />
    </li>
  )
}
export default Tool