import React from 'react';
import styles from '../styles/userInfo.module.scss';

import { Stack, Divider  } from '@mui/material';

const UserInfo:React.FC = () => {
  return (
    <Stack style={{ gap:'2rem', padding: '5px 10px 15px 20px' }}>
      <div  style={{ display:'flex', flexDirection:'column' }}>
        <span>Personal Information</span>
        <div className={styles.personalInfo}>
          <div>
            <h5>full Name</h5>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <h5>Phone Number</h5>
            <h6>07060780922</h6>
          </div>
          <div >
            <h5>Email Address</h5>
            <h6>grace@gmail.com</h6>
          </div>
          <div>
            <h5>Bvn</h5>
            <h6>07060780922</h6>
          </div>
          <div>
            <h5>Gender</h5>
            <h6>Female</h6>
          </div>
        </div>
        <div className={styles.personalInfo2}>
          <div>
            <h5>Marital status</h5>
            <h6>Single</h6>
          </div>
          <div>
            <h5>Children</h5>
            <h6>None</h6>
          </div>
          <div>
            <h5>Type of residence</h5>
            <h6>Parent’s Apartment</h6>
          </div>
        </div>
      </div>
      <Divider/>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <span>Education and Employment</span>
        <div className={styles.personalInfo}>
          <div>
            <h5>level of education</h5>
            <h6>B.Sc</h6>
          </div>
          <div>
            <h5>employment status</h5>
            <h6>Employed</h6>
          </div>
          <div>
            <h5>sector of employment</h5>
            <h6>FinTech</h6>
          </div>
          <div>
            <h5>Duration of employment</h5>
            <h6>2 years</h6>
          </div>
        </div>
        <div className={styles.personalInfo2}>
          <div>
            <h5>office email</h5>
            <h6>grace@lendsqr.com</h6>
          </div>
          <div>
            <h5>Monthly income</h5>
            <h6>₦200,000.00- ₦400,000.00</h6>
          </div>
          <div>
            <h5>loan repayment</h5>
            <h6>40,000</h6>
          </div>
        </div>
      </div>
      <Divider/>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <span>Socials</span>
        <div className={styles.personalInfo2}>
          <div>
            <h5>Twitter</h5>
            <h6>@grace_effiom</h6>
          </div>
          <div>
            <h5>Facebook</h5>
            <h6>Grace Effiom</h6>
          </div>
          <div>
            <h5>Instagram</h5>
            <h6>@grace_effiom</h6>
          </div>
        </div>
      </div>
      <Divider/>
      <div style={{ display:'flex', flexDirection:'column' }}>
        <span>Guarantor</span>
        <div className={styles.personalInfo2}>
          <div>
            <h5>full Name</h5>
            <h6>Debby Ogana</h6>
          </div>
          <div>
            <h5>Phone Number</h5>
            <h6>07060780922</h6>
          </div>
          <div>
            <h5>Email Address</h5>
            <h6>debby@gmail.com</h6>
          </div>
          <div>
            <h5>Relationship</h5>
            <h6>Sister</h6>
          </div>
        </div>
      </div>
      <Divider/>
      <div style={{ display:'flex', flexDirection:'column' }}>
      <div className={styles.personalInfo2}>
          <div>
            <h5>full Name</h5>
            <h6>Debby Ogana</h6>
          </div>
          <div>
            <h5>Phone Number</h5>
            <h6>07060780922</h6>
          </div>
          <div>
            <h5>Email Address</h5>
            <h6>debby@gmail.com</h6>
          </div>
          <div>
            <h5>Relationship</h5>
            <h6>Sister</h6>
          </div>
        </div>
      </div>
    </Stack>
  )
}

export default UserInfo