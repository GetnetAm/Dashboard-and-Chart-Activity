import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';


function Sidebar({openSidebarToggle}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive": " "}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <ShoppingCartIcon className='icon_header' />SHOP

        </div>
        <span className='icon close_icon'>X</span>

      </div>

      <ul className='sidebar-list'>
      <li className='sidebar-list-item'>
          <a href="">
            <DashboardIcon className='icon' /> Dashboard
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <ProductionQuantityLimitsIcon className='icon' /> Products
          </a>

        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <ListAltIcon className='icon' />Categories
          </a>

        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <Diversity3Icon className='icon' />Customers
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <InventoryIcon className='icon' />Inventory
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <AssessmentIcon className='icon' />Reports
          </a>

        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <SettingsIcon className='icon' />Setting
          </a>

        </li>

      </ul>

    </aside>
  )
}

export default Sidebar
