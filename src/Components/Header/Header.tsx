import React from 'react'
import styles from './Header.module.css'
import { BsBasket3 } from 'react-icons/bs';

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.header__content}>
            Dashboard
            <BsBasket3 size={30} className={styles.icon}/>
        </div>
    </div>
  )
}

export default Header


