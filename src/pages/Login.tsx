import React, { useRef, useEffect } from 'react';


import styles from '../styles/login.module.scss';

import { Link, useNavigate } from "react-router-dom";
import { Union, Pablo } from '../assets';
import { Users } from '.';



const Login:React.FC = () => {
    const navigate = useNavigate();
    const getEmail = localStorage.getItem('emailData')
    const getPassword = localStorage.getItem('passwordData')



    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleSubmit = () => {
        if(email.current?.value =="lendsqrfetest@gmail.com"&&password.current?.value=="12345"){
            localStorage.setItem('emailData','lendsqrfetest@gmail.com')
            localStorage.setItem('passwordData','12345')
        }
    }

    useEffect(() => {
        {getEmail&&getPassword? navigate('/users') : navigate('/')}
      },[getEmail&&getPassword])
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
                        <form onSubmit={handleSubmit}>
                            <input className={styles.input} type="email"
                            ref={email} placeholder="Email" />
                            <input className={styles.input} type="password" 
                            ref={password} placeholder="Password" />
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