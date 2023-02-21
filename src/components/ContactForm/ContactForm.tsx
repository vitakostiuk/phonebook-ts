import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addContact} from '../../redux/phonebook/phonebook-slice';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameId = nanoid();
  const numberId = nanoid();
  
  const dispatch = useDispatch();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
      }
  };

    const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(
      addContact({ name, number, id: nanoid() })
    );

    setName('');
    setNumber('');
  };

    return (
    <form className={s.ContactForm} onSubmit={handleSubmit}>
      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={nameId}>
          Name
        </label>
        <input
          id={nameId}
          className={s.Input}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div className={s.InputWrapper}>
        <label className={s.Label} htmlFor={numberId}>
          Number
        </label>
        <input
          id={numberId}
          className={s.Input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={s.FormBtn}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;