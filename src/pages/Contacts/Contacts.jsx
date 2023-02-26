// import Filter from "components/Filter";
// import ContactList from "components/ContactList";
// import ContactForm from "components/ContactForm";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";
import { flexRow } from "components/GlobalStyles/GlobalStyles";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector";


const Contacts = () => {
    const tokenData = useSelector(selectAuthToken);
    const token = tokenData.token;

    return (
        <>
            {token ?
                <Box>
                    {/* <ContactList/> */}
                    <ContactForm />
                    <Typography>
                        Contacts
                    </Typography>
                    <Filter />
                </Box>
                :
                <Box sx={flexRow}>
                    <Box sx={flexRow} >
                        <Typography variant="h1" align="center">
                            "Say goodbye to lost contacts - our app securely stores your phonebook in the cloud for free!"
                        </Typography>
                    </Box>
                    <Box sx={flexRow} >
                        <Typography variant="h5" align='center' mt='2rem' width='20vw'>
                            Please <Link to='/login' >Log In</Link> or <Link to='/register' replace >Sign Up</Link> to manage contacts
                        </Typography>
                    </Box>
                </Box>}
        </>
    )
}

export default Contacts;




