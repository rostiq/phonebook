
import { useState } from 'react';
import Notiflix from 'notiflix';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunk';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';


const initState = {
  email: '',
  password: '',
}
const Login = () => {
  const dispatch = useDispatch();


  const [values, setValues] = useState(initState);

  const handleChange = event => {
    const { value, name } = event.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      await dispatch(authLoginThunk(values)).unwrap();

    } catch (error) {
      Notiflix.Notify.warning('Oops! It seems like your email or password is incorrect.', { timeout: 6000, },);
    }
  }

  return (
    <>
      <Typography variant="h4" align="center" sx={{mt:'2rem'}}>
This app can create, manage and store your contacts in cloud absolutely free!
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', mt: '10vw', flexWrap: 'wrap' }}>
        <Box
          component="form" onSubmit={handleSubmit} width='360px'
          sx={{
            '& > :not(style)': { m: 1, width: '20rem', mt: '1rem' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%)',
            padding: '1rem'
          }}
          noValidate
          autoComplete="off"
        >
          <TextField autoComplete='on' value={values.email} name="email" onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" />
          <TextField value={values.password} name="password" onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" />
          <Button type='submit' variant="contained">Log In</Button>
          <Link href="register" align='center'>create new account</Link>
        </Box>
      </Box>
    </>

  )
}

export default Login;