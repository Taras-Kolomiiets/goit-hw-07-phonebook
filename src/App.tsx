import './App.css';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { useDeleteContactMutation, useGetContactsQuery } from 'redux/contacts/contacts-slice';

export default function App() {
  const { data, isFetching } = useGetContactsQuery(null);
  const [deleteContact] = useDeleteContactMutation();
  
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm contacts={data}/>

      <h2>Contacts</h2>
      <Filter contacts={data} />
     {data && <ContactList contacts={data} onDelete={deleteContact} />}
    </div>
  );
}
