import css from "./ContactForm.module.css"
const ContactForm = ({ addContact }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.tel.value;
        const newContact = { name, number };
        addContact(newContact);
        event.currentTarget.reset()
    }


  return (
      <form className={css.form} onSubmit={handleSubmit}>
          <label>Name<input type="text" name="name" /></label>
          <label>Number<input type="tel" name="tel"/></label>
      <button type="submit">Add contact</button>
      </form>
          
  )
}

export default ContactForm