import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook-slice';
import ContactListItem from '../ContactListItem';
import { IState, IContact } from '../../interfaces/contacts';
import s from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const onDeleteContact = (id: string) => dispatch(deleteContact(id));

  const contacts = useSelector((state: IState) =>
    filteredContacts(state.phonebook.contacts, state.phonebook.filter)
  );

  return (
    <ul className={s.List}>
      <ContactListItem contacts={contacts} onDeleteContact={onDeleteContact} />
    </ul>
  );
};

function filteredContacts(allContacts: IContact[], filter: string) {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
}

export default ContactList;