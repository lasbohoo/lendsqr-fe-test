import React from 'react'
import { AllUsers, ActiveUsers, LoanUsers, SavingUsers } from '../assets'


import '../styles/UserCards.scss'



const UserCards:React.FC = () => {
  return (
    <>
        <div className='card'>
            <div className='all-users'>
                <img src={AllUsers} alt='all-users'/>
            </div>           
            <span className='text'>Users</span>
            <span className='amount'>2,453</span>
        </div>
        <div className='card'>
            <div className='all-users'>
                <img src={ActiveUsers} alt='all-users'/>
            </div>           
            <span className='text'>Active Users</span>
            <span className='amount'>2,453</span>
        </div>
        <div className='card'>
            <div className='all-users'>
                <img src={LoanUsers} alt='all-users'/>
            </div>           
            <span className='text'>Users with Loans</span>
            <span className='amount'>12,453</span>
        </div>
        <div className='card'>
            <div className='all-users'>
                <img src={SavingUsers} alt='all-users'/>
            </div>           
            <span className='text'>Users with Savings</span>
            <span className='amount'>102,453</span>
        </div>
    </>
  )
}

export default UserCards