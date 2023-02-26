import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";
import { selectAuthToken } from "redux/auth/auth.selector"

export const PublicRout = () => {
    const token = useSelector(selectAuthToken);

    return token ? <Navigate to='/' replace/> : <Outlet /> ;
}