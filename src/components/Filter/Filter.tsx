import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-slice';
import { IState } from '../../interfaces/contacts';
import s from '../ContactForm/ContactForm.module.css';
import { nanoid } from '@reduxjs/toolkit';

const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector((state: IState) => state.phonebook.filter);

  return (
    <div className={s.InputWrapper}>
      <label className={s.Label} htmlFor={nanoid()}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={value}
        id={nanoid()}
        className={s.Input}
        onChange={e =>
          dispatch(changeFilter(e.currentTarget.value))
        }
      />
    </div>
  );
};

export default Filter;