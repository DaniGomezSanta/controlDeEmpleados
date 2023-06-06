import { Button, Menu, MenuItem } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {

 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  return (
  
    <div className='bg-dark'>
    <div className="d-inline-block">
      <ul className="nav nav-pills">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Administrador</a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/admin">Empleados</Link></li>
            <li><Link className="dropdown-item" to="/accesos">Tabla de Accesos</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  
    <div className="d-inline-block">
      <ul className="nav nav-pills">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Registro</a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Registro</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

    

// {/* <nav  className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
// <div>
//   <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Administrador
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         MenuListProps={{
//           'aria-labelledby': 'basic-button',
//         }}
//       >
//         <Link to='/admin'>
//           <MenuItem onClick={handleClose}>Empleados<AccountCircleIcon/></MenuItem>
//         </Link>
//         <Link to='/accesos'>
//           <MenuItem onClick={handleClose}>Tablero Trafico<AlarmOnIcon/></MenuItem>
//         </Link>
//       </Menu>

//   </div>
//         <Link to='/'>
//           <button
//             id="basic-button"
//             aria-controls={open ? 'basic-menu' : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? 'true' : undefined}
//             onClick={handleClick}
//           >
//             REGISTRO
//           </button>
//         </Link>
//     </div>
//    </nav> */}


   
        )
    }
  
