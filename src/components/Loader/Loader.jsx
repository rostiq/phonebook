import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import Backdrop from '@mui/material/Backdrop';

export const Loader = () => {
  return (
    <Backdrop open={true}>
      <CircularProgress />
    </Backdrop>
  );
}
