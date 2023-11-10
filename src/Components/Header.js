import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';


function Header({OpenSidebar}) {
  return (
    <div className='header'>
        <div className='menu-icon'>
            <MenuIcon className='icon' onClick={OpenSidebar} />

        </div>
        <div className='menu-left'>
            <SearchIcon className='icon' />

        </div>

        <div className='header-right'>
            <NotificationsIcon className='icon'/>
            <EmailIcon className='icon'/>
            <PersonIcon className='icon' />

        </div>

     
    </div>
  )
}

export default Header
