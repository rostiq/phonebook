import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { UserMenu } from './UserMenu/UserMenu';
import Container from '@mui/material/Container';
import { PublicRout } from "./AuthRouts/PublicRout";
import { PrivateRout } from "./AuthRouts/PrivateRout copy";
const Login = lazy(() => import('../pages/Login/Login'));
const Register = lazy(() => import('../pages/Register/Register'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));

const App = () => {

  return (
    <>
      <Container maxWidth="lr">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<UserMenu />}>
              <Route path="" element={<PublicRout />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="register" element={<Register />}></Route>
              </Route>
              <Route path="" element={<PrivateRout />}>
                <Route index element={<Contacts />}></Route>
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;