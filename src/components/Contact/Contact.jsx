
function Contact({name,number}) {
  return (
      <li>
          <h2>{name}</h2>
          <p>{number}</p>
          <button type="button">Delete</button>
    </li>
  )
}

export default Contact