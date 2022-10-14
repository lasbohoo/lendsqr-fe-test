import React from 'react';
import styles from '../styles/userPopUp.module.scss';

import { Stack } from '@mui/material';
import { MORE } from "../testdata";
import { Link } from 'react-router-dom';


const UserPopUp:React.FC = () => {
  return (
    <div className={styles.viewContainer}>
        <Stack className={styles.viewBox}>
        {MORE.map((more:any, index:any) => {
            return (
                <Link to={more.path} className={`${styles.paper} ${styles.a}`} key={index}>
                    <span className={styles.icon}>
                        {more.icon} 
                    </span>
                    <span className={styles.text}>
                        {more.text} 
                    </span>             
                </Link>
            )
            
        })}
        </Stack>
    </div>
  )
}

export default UserPopUp