import { createSlice, combineReducers } from '@reduxjs/toolkit';
import { IContact } from '../../interfaces/contacts';

const initialState: IContact[] = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      return state.find(contact => contact.name === payload.name)
        ? alert(`${payload.name} is already in contacts.`)
        : [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;

const phonebookReducer = combineReducers({
  [contactsSlice.name]: contactsSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
});

export default phonebookReducer;