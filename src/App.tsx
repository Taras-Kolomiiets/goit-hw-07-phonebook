import './App.css';
import React, {useState} from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useDeleteContactMutation, useGetContactsQuery} from 'redux/contacts/contacts-slice';

export default function App() {
  const [filter, setFilter] = useState("");

  const { data } = useGetContactsQuery(filter);
  const [deleteContact] = useDeleteContactMutation();

  function applyFilter(xWord: string) {
    setFilter(xWord);
  }

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm contacts={data}/>

      <h2>Contacts</h2>
      <Filter applyFilter={ applyFilter}/>
     {data && <ContactList contacts={data} onDelete={deleteContact} />}
    </div>
  );
}
