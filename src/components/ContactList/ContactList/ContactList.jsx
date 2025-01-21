import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import s from "./ContactList.module.css"
import { selectContacts } from "../../../redux/contactsSlice";
import { selectFilter } from "../../../redux/filtersSlice";


const ContactList = () => { 

const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

//   const filteredContacts = contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
    
    return (
        <ul className={s.list}>
             {contacts.map(({ id, name, number }) => (
                 <li key={id} className={s.listItem}>
                     <Contact
                         id={id}
                        name={name}
                         number={number}
                    
                     />
                     </li>
            ))}        
        </ul>
    );
};

export default ContactList;