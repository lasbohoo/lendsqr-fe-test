import React from 'react';
import { CARD } from "../testdata";



import styles from '../styles/userCards.module.scss'



const UserCards:React.FC = () => {
  return (
    <>
       
            {CARD.map((card, index) =>{
                return(
                    <>
                     <div className={styles.card} key={index}>
                        <div className={styles.allUsers}>
                            {card.img}
                        </div>           
                        <span className={styles.text}>{card.text}</span>
                        <span className={styles.amount}>{card.amount}</span>
                     </div>
                    </>   
                )
            })
                
            }
            
        
    </>
  )
}

export default UserCards