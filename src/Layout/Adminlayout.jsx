import React from 'react'
import AdminNavbar from '../Admin/AdminNavbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../Admin/AdminFooter'

function Adminlayout() {
  return (
    <>
    <AdminNavbar/>
    <Outlet/>
    <AdminFooter/>
    </>
  )
}

export default Adminlayout