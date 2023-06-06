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

<nav  className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
<div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menú
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to='/admin'>
          <MenuItem onClick={handleClose}>Administrador<AccountCircleIcon/></MenuItem>
        </Link>
        <Link to='/'>
          <MenuItem onClick={handleClose}>Registro<AlarmOnIcon/></MenuItem>
        </Link>
      </Menu>
    </div>
   </nav>
        )
    }
  
