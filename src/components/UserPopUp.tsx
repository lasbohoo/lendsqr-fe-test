import React from 'react';
import styles from '../styles/userPopUp.module.scss';

import { Stack } from '@mui/material';
import { MORE } from "../testdata";


const UserPopUp:React.FC = () => {
  return (
    <div className={styles.viewContainer}>
        <Stack className={styles.viewBox}>
        {MORE?.map((more:any, index:any) => (
            <div className={styles.paper} key={index}>
                <span className={styles.icon}>
                    {more.icon} 
                </span>
                <span className={styles.text}>
                    {more.text} 
                </span>             
            </div>
        ))}
        </Stack>
    </div>
  )
}

export default UserPopUp