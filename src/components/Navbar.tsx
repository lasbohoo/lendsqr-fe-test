import React, { useState } from 'react';
import styles from '../styles/navbar.module.scss';

import { Union, Search, Info, Image, ArrowDown } from '../assets';
import { Avatar } from '@mui/material';
import { Link } from  "react-router-dom";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import CloseIcon from '@mui/icons-material/Close';



const Navbar:React.FC = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false)
  return (
    <nav className={styles.navContainer}>
        <div className={styles.logo}>
            <img src={Union} alt='logo' />
            <Link to='/' className={styles.lendsqr}>Lendsqr</Link>
        </div>
        <ul className={isMobile ? `${styles.navLinksMobile}` : `${styles.navLinks}`}
        onClick={() => setIsMobile(false)}
        >
            <li>
                <form className={styles.searchBar}>
                    <input  type='text' placeholder='search for anything' name='q' />
                    <button type='submit'>
                        <img src={Search} alt='search' />
                    </button>
                </form>
            </li>
            
            <li>
                <div className={styles.notification}>
                    <span className={styles.docs}>Docs</span>
                    <img src={Info} alt='info' />
                    <div className={styles.notify}>
                        <Avatar src={Image} alt='image' />
                        <h5>Ayodeje</h5>
                        <img src={ArrowDown} alt='arrow-down' />
                    </div>   
                </div>
            </li>
            
        </ul>

            <button className={styles.mobileMenuIcon}
            onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? ( <i><CloseIcon/></i> ) : ( <i><FormatListBulletedIcon/></i>)}
            </button>
    </nav>
  )
}

export default Navbar