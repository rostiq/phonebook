import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Notiflix from 'notiflix';
import { publicApi } from 'http/http';
import { useDispatch } from 'react-redux';
import { authLoginThunk } from 'redux/auth/auth.thunk';
import { useNavigate } from 'react-router-dom';

const initState = {
    email: '',
    name: '',
    password: '',
}

const Register = () => {
    const [values, setValues] = useState(initState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    const handleChange = event => {
        const { value, name } = event.target;
        setValues(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await publicApi.post('users/signup', values);
            Notiflix.Notify.success('you`re in, great!');
            await dispatch(authLoginThunk(values)).unwrap();
            navigate('/', { replace: true })
        }
        catch (error) {
            console.log(error);
            Notiflix.Notify.warning(error.message);

        }

    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', mt: '5vw', flexWrap: 'wrap' }}>
                <Box
                    onSubmit={handleSubmit}
                    component="form"
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
                    <Typography variant="h5" align='center'>
                        Create new account
                    </Typography>
                    <TextField value={values.name} name="name" onChange={handleChange} id="outlined-basic" label="Name" variant="outlined" />
                    <TextField autoComplete='on' value={values.email} name="email" onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" />
                    <TextField value={values.password} name="password" onChange={handleChange} id="outlined-basic" label="Password" variant="outlined" />
                    <Button type='submit' onSubmit={handleSubmit} size="large" variant="contained">Sign Up</Button>
                </Box>
            </Box>

        </>
    )
}

export default Register;