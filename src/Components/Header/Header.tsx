import React, { useState, useContext } from 'react'
import styles from './Header.module.css'
import { BsBasket3 } from 'react-icons/bs';
import AddCartModal from '../AddBasketModal/AddBasketModal';
import { AnimatePresence } from 'framer-motion';
import Context from '../../Context/Context';

const Header = () => {
  
  const[addBasketModalVisible, setAddBasketModalVisible] = useState(false)
  
  const {baskets, setBaskets} = useContext(Context)

  return (
    <>
      <div className={styles.header}>
          <div className={styles.header__content}>
            <div>
              <h2>Dashboard</h2>
            </div>
            <div className={styles.right} onClick={() => setAddBasketModalVisible(!addBasketModalVisible)}>
              <h3>New basket</h3>
              <BsBasket3 size={30} />
            </div>
          </div>
      </div>
      <AnimatePresence>
        {addBasketModalVisible && 
          <AddCartModal
            addBasketModalVisible={addBasketModalVisible}
            setAddBasketModalVisible={setAddBasketModalVisible}
          />
        }
      </AnimatePresence> 
    </>
  )
}

export default Header


