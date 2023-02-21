import React from 'react';
import {IContact} from '../../interfaces/contacts'
import s from '../ContactList/ContactList.module.css';

interface IProps {
  contacts: IContact[];
  onDeleteContact: (id: string) => void;
}

const ContactListItem = ({ contacts, onDeleteContact }: IProps) => (
  <>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.Item}>
        {name}
        <span className={s.Number}>{number}</span>
        <button
          type="button"
          className={s.Btn}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    ))}
  </>
);

export default ContactListItem;