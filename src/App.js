

import { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Sidebar from './Mains/global/Sidebar';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle]= useState(false)
  const OpenSidebar =()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }




  return (
    <div className="grid-container">
     <Header OpenSidebar={OpenSidebar} />
     <Sidebar openSidebarToggle={openSidebarToggle} />
     <Home />
    </div>
  );
}

export default App;
