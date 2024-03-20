import { useState } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'



function App() { 
  const [contacts,setContacts]=useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
])

  const addContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid() };
    console.log(finalContact);
    setContacts((prevContacts)=>[...prevContacts, finalContact])
  };

  
  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts((prevContacts)=>prevContacts.filter((contact)=>contact.id !==contactId))
  }

  const [filter, setFilter] = useState("");
  const onChangeFilter = (event) => {
    setFilter(event.target.value);
  }
  
  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
  <div>
  <h1>Phonebook</h1>
      <ContactForm addContact={addContact}/>
  <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
  <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
</div>

  )
}

export default App
