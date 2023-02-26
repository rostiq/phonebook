
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { nanoid } from "@reduxjs/toolkit";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, fetchContacts } from "redux/contacts.operations";
import { filteredContacts, selectFilter, selectIsLoading } from "redux/contacts.selectors";
import { FILTER } from "redux/contacts.slice";
import Grid from '@mui/material/Grid';


const Contacts = () => {
    const dispatch = useDispatch();
    const filtered = useSelector(selectFilter);
    const contacts = useSelector(filteredContacts);
    const isLoading = useSelector(selectIsLoading);

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
        <Grid container spacing={2} style={{ height: '100vh', marginTop:'1rem' }}>
            <Grid item xs={3} style={{ padding: '1rem' }}>
                <Box>
                    <Typography sx={{ ml: '1rem'}}>
                        You have {isLoading ? 'loading' : contacts.length}
                        {contacts.length === 1 ? ' contact' : ' contacts'}
                    </Typography>
                    <Filter value={filtered} onChange={handleChangeFilter} />
                    <Box sx={{mt:'1rem' }}>
                        <ContactForm onSubmit={handleAddContact} />
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={9} style={{ padding: '1rem' }}>
                {contacts.length === 0 ? (
                    'you have no contacts yet'
                ) : (
                    <ContactList contacts={contacts} onRemoveContact={handleRemoveContact} />
                )}
            </Grid>
        </Grid>
    );
}

export default Contacts;




