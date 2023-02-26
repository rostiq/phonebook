import React from 'react';


const Filter = ({ value, onChange }) => (
  <div>
      <input
        placeholder='search'
        type="name"
        value={value}
        onChange={onChange}
      />
  </div>
);

export default Filter;