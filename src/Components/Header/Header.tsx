import React, { useState } from 'react'
import styles from './Header.module.css'
import { BsBasket3 } from 'react-icons/bs';
import AddCartModal from '../AddCartModal/AddCartModal';

const Header = () => {
  
  const[addCartModalVisible, setAddCardModalVisible] = useState(false)
  
  return (
    <>
      <div className={styles.header}>
          <div className={styles.header__content}>
              <h2>Dashboard</h2>
              <BsBasket3 
                size={30} 
                className={styles.icon}
                onClick={() => setAddCardModalVisible(!addCartModalVisible)}
              />
          </div>
      </div>
      {addCartModalVisible && 
        <AddCartModal
          addCartModalVisible={addCartModalVisible}
          setAddCardModalVisible={setAddCardModalVisible}
        />
      }
    </>
  )
}

export default Header


