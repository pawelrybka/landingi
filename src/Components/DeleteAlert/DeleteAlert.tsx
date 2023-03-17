import React from 'react'
import styles from './DeleteAlert.module.css'
import { useContext } from 'react'
import Context from '../../Context/Context'
import { motion } from "framer-motion"
import { AiOutlineClose } from 'react-icons/ai'
import Backdrop from '../../UI/Backdrop/Backdrop'

const DeleteAlert = () => {
  
  const { 
    baskets,setBaskets,
    selectedBasket, setSelectedBasket, 
    basketInfoVisible, setBasketInfoVisible, 
    deleteAlertVisible, setDeleteAlertVisible
  } = useContext(Context);

  const handleRemove = () => {
    setDeleteAlertVisible(!deleteAlertVisible)
    setBasketInfoVisible(!basketInfoVisible)
    setBaskets(baskets.filter(basket => basket.id !== selectedBasket?.id));
    setSelectedBasket(null)
  }

  return (
    <>
      <motion.div 
        className={styles.deleteAlert}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
      >
        <div className={styles.deleteAlert__header}>
          <h3>Delete roadmap point</h3>
          <button onClick={() => setDeleteAlertVisible(!deleteAlertVisible)}><AiOutlineClose size={20}/></button>
        </div>
        
        <div className={styles.deleteAlert__content}>
          <span>Do You want to delete this basket ?</span>
          <div className={styles.buttonSection}>
            <button onClick={() => setDeleteAlertVisible(!deleteAlertVisible)}>No</button>
            <button onClick={handleRemove}>Yes</button>
          </div>
        </div>
      </motion.div>
      <Backdrop/>
    </>
  )
}

export default DeleteAlert

