import Contact from "../Contact/Contact"
function ContactList({phoneContacts}) {
  return (
      <ul>
          {phoneContacts.map(phoneContact => {
              return (<Contact key={phoneContact.id} name={phoneContact.name} number={phoneContact.number} />)
          })} 
    </ul>
  )
}

export default ContactList