import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', text: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', text: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', text: 'Eden Clements', phone: '645-17-79' },
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialState,
    reducers: {
      deleteContact: (state, action) => {
        return state.filter(contact => contact.id !== action.payload);
      },
      Prepare(contacts) {
        return {
          payload: {
            contacts,
          },
        };
      },
      addContact: (state, action) => {
        return [...state, action.payload];
      },
    },
  });

  export const { deleteContact, addContact } = contactsSlice.actions;
  export const contactsReducer = contactsSlice.reducer;