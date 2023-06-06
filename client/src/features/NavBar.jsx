import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav  className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to='/empleados'>Administrador</Link>
    </div>
    <div className="container-fluid">
      <Link className="navbar-brand" to='/'>Registrar Ingreso</Link>
    </div>
  </nav>
  )
}
