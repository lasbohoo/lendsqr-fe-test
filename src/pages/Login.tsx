import React from 'react';
import { Union, Pablo } from '../assets';

import '../styles/Login.scss';


const Login:React.FC = () => {
  return (
    <>
        <div className='container'>
            <div className='wrapper-logo'>
                <div className='logo'>
                    <img src={Union} alt='logo' />
                    <h4 className='text'>lendsqr</h4>
                </div>
                <div className='logo-img'>
                    <img src={Pablo} alt='pablo' />
                </div>  
            </div>
            <div className='login-container'>
                <div className='welcome'>
                        <h2>Welcome</h2>
                        <span>Enter details to login</span>
                        <form>
                            <input className='input' type="email" name="email" placeholder="Email" />
                            <input className='input' type="password" name="email" placeholder="Password" />
                            <span>show</span>
                            <h4 className='forgot-p'>Forgot PASSWORD?</h4>
                            <button className='btn'>
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