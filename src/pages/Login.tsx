import React from 'react';

import styles from '../styles/login.module.scss';

import { Union, Pablo } from '../assets';



const Login:React.FC = () => {
  return (
    <>
        <div className={styles.container}>
            <div className={styles.wrapperLogo}>
                <div className={styles.logo}>
                    <img src={Union} alt='logo' />
                    <h4 className={styles.text}>lendsqr</h4>
                </div>
                <div className={styles.logoImg}>
                    <img src={Pablo} alt='pablo' />
                </div>  
            </div>
            <div className={styles.loginContainer}>
                <div className={styles.welcome}>
                        <h2>Welcome</h2>
                        <span>Enter details to login</span>
                        <form>
                            <input className='input' type="email" name="email" placeholder="Email" />
                            <input className='input' type="password" name="email" placeholder="Password" />
                            <span>show</span>
                            <h4 className={styles.forgotP}>Forgot PASSWORD?</h4>
                            <button className={styles.btn}>
                                <span>log in</span>
                            </button>
                        </form>
                </div>
            </div>
            
              
                    
                
        </div>
    </>
  )
}

export default Login