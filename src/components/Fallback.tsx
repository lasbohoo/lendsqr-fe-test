import React from "react";
import styles from '../styles/fallback.module.scss';


const Fallback: React.FC = () => {
    
  return (
    <div className={styles.container}>
        <div className={styles.loader}></div>
    </div>
  )
}


export default Fallback