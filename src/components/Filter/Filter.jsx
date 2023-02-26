import { Box, Input } from '@mui/material';
import React from 'react';


const Filter = ({ value, onChange }) => (
  <Box sx={{ml:'2rem'}}>
      <Input
        placeholder='search'
        type="name"
        value={value}
        onChange={onChange}
      />
  </Box>
);

export default Filter;