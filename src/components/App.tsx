import ContactList from '../components/ContactList';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import s from '../components/App.module.css';

export const App = () => {
  return (
    <div className={s.Container}>
      <h2 className={s.Title}>Phonebook</h2>
      <ContactForm />

      <h2 className={s.Title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
