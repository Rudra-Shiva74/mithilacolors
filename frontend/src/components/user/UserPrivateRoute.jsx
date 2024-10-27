import React from 'react'
import { isUserLogin } from '../Auth/Logincheck'
import { Navigate, Outlet } from 'react-router-dom'
export default function UserPrivateRoute() {
    return isUserLogin() ? < Outlet /> : <Navigate to='/Login' />
}
