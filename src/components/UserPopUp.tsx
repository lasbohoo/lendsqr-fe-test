import React from 'react'
import '../Styles/UserPopUp.scss'
import { Stack, List, ListItem, } from '@mui/material'
import { MORE } from "../testdata";


const UserPopUp:React.FC = () => {
  return (
    <div className='view-container'>
        <Stack className='view-box'>
        {MORE?.map((more:any, index:any) => (
            <div className='paper' key={index}>
                <span className='icon'>
                    {more.icon} 
                </span>
                <span className='text'>
                    {more.text} 
                </span>             
            </div>
        ))}
        </Stack>
    </div>
  )
}

export default UserPopUp