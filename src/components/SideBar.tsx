import React from 'react';
import styles from '../styles/sidebar.module.scss';

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HouseIcon from '@mui/icons-material/House';

import { Link } from "react-router-dom";

import { ArrowDown } from '../assets';
import { CUSTOMERS, BUSINESSES, SETTINGS } from "../testdata";


const SideBar:React.FC = () => {
    
  return (
        <div className={styles.sidebar}>
            <span>
                <BusinessCenterIcon className={styles.icon}/>
                <h3>Switch Organization</h3>
                <img src={ArrowDown} alt='arrow-down' />
            </span>
            <span className={styles.dash}>
                <HouseIcon />
                <h4>Dashboard</h4>
            </span>
            <span><h3>CUSTOMERS</h3></span>
            
            <nav className={styles.sideMenu}>
                <ul className={styles.sideMenuItems}>
                    {CUSTOMERS.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link className={styles.a} to={item.path}>
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
                                <Link className={styles.a} to={item.path!}>
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
                                <Link className={styles.a} to={item.path!}>
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