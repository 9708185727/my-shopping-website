import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useSelector } from 'react-redux'
import {  LOGIN_ROUTE } from '../constants/routes'
const AuthLayout = () => {
    const {user} = useSelector((state)=>state.auth)
  return  <> {user?<Outlet/>:<Navigate to={LOGIN_ROUTE}/>}  </>
  
}

export default AuthLayout