import React, { useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthToken } from 'redux/auth/auth.selector';
import { selectProfile } from 'redux/profile/profile.selector';
import { getProfileThunk } from 'redux/profile/profile.thunk';
import { Avatar } from '@mui/material';
import { authLogOutThunk } from 'redux/auth/auth.thunk';
import { firstLetter, randomColor } from 'helpers/helpres';


const StyledLink = styled(NavLink)`
color: white;
text-decoration: none;
`;

export const UserMenu = () => {
  const dispatch = useDispatch();
  const tokenData = useSelector(selectAuthToken);
  const token = tokenData.token;
  const profile = useSelector(selectProfile);
  const profileName = profile ? profile.name : '';

  useEffect(() => {
    if (token) {
      dispatch(getProfileThunk())
    }
  }, [token, dispatch])

  const handleLogOut = () => {
    dispatch(authLogOutThunk());
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <StyledLink to='/' >
                Phonebook
              </StyledLink>
            </Typography>
              {token
                ?
            <Typography variant="p" component="div" sx={{ display: 'flex', gap: '1rem', alignItems:'center'}}>
                  <Typography>
                    {profileName}
                </Typography>
                <Avatar sx={{ bgcolor: `#${randomColor}` }}>{firstLetter(profileName)}</Avatar>
                <StyledLink onClick={handleLogOut} > Logout</StyledLink>
            </Typography>
                :
                <StyledLink to="login" >
                  Login
                </StyledLink>}
          </Toolbar>
        </AppBar>
      </Box>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

//Typography props is 
//  sx={{
