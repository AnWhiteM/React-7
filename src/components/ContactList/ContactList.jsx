import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';


export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);

  const filteredContacts = contacts.filter(contact => {
    return contact && contact.text && contact.text.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div>
      <h2>Contact List</h2>
      <ul className={css.contactList}>
        {filteredContacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}