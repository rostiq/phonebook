import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, TextField } from '@mui/material';



const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        padding: '1rem',
        borderRadius: '8px',
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        name="name"
        label="name"
        variant="outlined"
        value={name}
        onChange={handleChange}
      />
      <TextField
        name="number"
        label="number"
        variant="outlined"
        value={number}
        onChange={handleChange}
        style={{ marginTop: '1rem' }}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={{ marginTop: '1rem' }}
      >
        Add new contact
      </Button>
    </form>
  );

}

ContactForm.prototypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;



