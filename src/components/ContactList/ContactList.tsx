import FormButton from '../FormButton';
import { MdDelete } from 'react-icons/md';
import s from './ContactList.module.css';

export default function ContactList({contacts, onDelete}: any) {

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, phone }: any) => (
        <li key={id} className={s.item}>
          <span className={s.itemName}>{name}</span>
          <span className={s.itemPhone}>{phone}</span>
          <FormButton
            onClick={() => onDelete(id)}
            aria-label="Delete contact"
          >
            <MdDelete size="18" />
          </FormButton>
        </li>
      ))}
    </ul>
  );
}
