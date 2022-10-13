import React from 'react';
import { AllUsers, ActiveUsers, LoanUsers, SavingUsers } from '../assets'


import styles from '../styles/userCards.module.scss'



const UserCards:React.FC = () => {
  return (
    <>
        <div className={styles.card}>
            <div className={styles.allUsers}>
                <img src={AllUsers} alt='all-users'/>
            </div>           
            <span className={styles.text}>Users</span>
            <span className={styles.amount}>2,453</span>
        </div>
        <div className={styles.card}>
            <div className={styles.allUsers}>
                <img src={ActiveUsers} alt='all-users'/>
            </div>           
            <span className={styles.text}>Active Users</span>
            <span className={styles.amount}>2,453</span>
        </div>
        <div className={styles.card}>
            <div className={styles.allUsers}>
                <img src={LoanUsers} alt='all-users'/>
            </div>           
            <span className={styles.text}>Users with Loans</span>
            <span className={styles.amount}>12,453</span>
        </div>
        <div className={styles.card}>
            <div className={styles.allUsers}>
                <img src={SavingUsers} alt='all-users'/>
            </div>           
            <span className={styles.text}>Users with Savings</span>
            <span className={styles.amount}>102,453</span>
        </div>
    </>
  )
}

export default UserCards