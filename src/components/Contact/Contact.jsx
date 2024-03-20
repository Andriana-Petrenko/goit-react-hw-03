const Contact = ({contact, deleteContact}) => {
  return (
   <li>
          <h2>{contact.name}</h2>
          <p>{contact.number}</p>
          <button type="button" onClick={()=>deleteContact(contact.id)}>Delete</button>
    </li>
  )
}

export default Contact