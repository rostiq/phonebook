import PropTypes from 'prop-types';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '1rem',
  margin: '1rem',
  width: '20rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',


}));


const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid >
      {contacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Typography>
              {name}, {number}
            </Typography>
            <Button type="button" onClick={() => onRemoveContact(id)} >
              del
            </Button>
            </Item>
      ))}
      </Grid>
    </Box>
  )
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;