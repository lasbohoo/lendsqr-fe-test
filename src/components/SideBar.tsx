import React, { useState } from 'react'
import '../Styles/Sidebar.scss'

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HouseIcon from '@mui/icons-material/House';
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from "react-router-dom";

import { ArrowDown, Dashboards } from '../assets';
import { CUSTOMERS, BUSINESSES, SETTINGS } from "../testdata";


const SideBar:React.FC = () => {
    const [sidebar, setSidebar] = useState<boolean>(false)

    const showSidebar = () => setSidebar(!sidebar)
  return (
        <div className='side-bar'>
            {/* <div className='sideBar'>
                <Link to='#' className='menu-bar'>
                    <FormatListBulletedIcon onClick={showSidebar}/>
                </Link>
            </div> */}
            <span>
                <BusinessCenterIcon className='icon'/>
                <h3>Switch Organization</h3>
                <img src={ArrowDown} alt='arrow-down' />
            </span>
            <span className='dash'>
                <HouseIcon />
                <h4>Dashboard</h4>
            </span>
            <span><h3>CUSTOMERS</h3></span>
            
            <nav className={sidebar ? 'side-menu-active' : 'side-menu'}>
                <ul className='side-menu-items' onClick={showSidebar}>
                    {CUSTOMERS.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.image}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <span><h3>BUSINESSES</h3></span>
                    {BUSINESSES.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path!}>
                                    {item.image}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                    <span><h3>SETTINGS</h3></span>
                    {SETTINGS.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path!}>
                                    {item.image}
                                    <span>{item.name}</span>
                                </Link>
                            </li>
                        )
                    })}
                    
                </ul>
                
            </nav>
            
           
        </div>
  )
}

export default SideBar