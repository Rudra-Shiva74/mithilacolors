import React from 'react'
import { isAdminLogin } from '../Auth/Logincheck'
import { Navigate, Outlet } from 'react-router-dom'
export default function PrivateRoute() {
    return isAdminLogin() ? < Outlet /> : <Navigate to='/admin' />
}
