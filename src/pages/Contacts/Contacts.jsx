// import Filter from "components/Filter";
// import ContactList from "components/ContactList";
// import ContactForm from "components/ContactForm";
// import { Typography } from "@mui/material";
// import { Box } from "@mui/system";
import { nanoid } from "@reduxjs/toolkit";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts } from "redux/contacts.operations";
import { filteredContacts, selectError, selectFilter } from "redux/contacts.selectors";
import { FILTER } from "redux/contacts.slice";

const Contacts = () => {
    const dispatch = useDispatch();
    const filtered = useSelector(selectFilter);
    const contacts = useSelector(filteredContacts);
    const error = useSelector(selectError)

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleAddContact = (name, number) => {
        if (contacts.find(contact => contact.name === name)) {
            alert(`${name} is already in contacts.`);
            return;
        }
        const newContact = {
            id: nanoid(),
            name,
            number,
        };
        dispatch(addContact(newContact));
    }

    const handleRemoveContact = contactId => {
        dispatch(deleteContact(contactId));
    };

    const handleChangeFilter = event => {
        dispatch(FILTER(event.target.value));
    };

    return (
        <>
            <ContactForm onSubmit={handleAddContact} />
            <h2>Contacts</h2>
            <div>
                <p>
                    All contacts: {contacts.length}
                </p>
            </div>
            <Filter value={filtered} onChange={handleChangeFilter} />
            {error ? 'can`t load data, please check connection' :
                <ContactList
                    contacts={contacts}
                    onRemoveContact={handleRemoveContact}
                />}
        </>
    );
}

export default Contacts;




