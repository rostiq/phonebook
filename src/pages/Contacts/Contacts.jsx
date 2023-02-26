
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "@reduxjs/toolkit";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts } from "redux/contacts.operations";
import { filteredContacts, selectError, selectFilter, selectIsLoading } from "redux/contacts.selectors";
import { FILTER } from "redux/contacts.slice";


const Contacts = () => {
    const dispatch = useDispatch();
    const filtered = useSelector(selectFilter);
    const contacts = useSelector(filteredContacts);
    const isLoading = useSelector(selectIsLoading);
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
            <Box sx={{ mt: '2rem', display: 'flex', }}>
                <Box sx={{
                    width: '20rem',

                }}>
                    <Typography sx={{ ml: '2rem' }}>You have {isLoading ? 'loading' : contacts.length}
                        {contacts.length === 1 ? ' contact' : ' contacts'}
                    </Typography>
                    <Filter value={filtered} onChange={handleChangeFilter} />
                </Box>
                {error ? 'can`t load data, please check connection' :
                    <ContactList
                        contacts={contacts}
                        onRemoveContact={handleRemoveContact}
                    />}
                <ContactForm onSubmit={handleAddContact} />

            </Box>
        </>
    );
}

export default Contacts;




