import React from 'react'
import styles from './BasketInfo.module.css'
import { useContext } from 'react';
import Context from '../../Context/Context'
import Chart from '../Chart/Chart';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from "framer-motion"
import { BsTrash } from 'react-icons/bs'
import DeleteAlert from '../DeleteAlert/DeleteAlert';
import { AnimatePresence } from 'framer-motion';


const BasketInfo = () => {
  
  const { 
    selectedBasket, setSelectedBasket, 
    basketInfoVisible, setBasketInfoVisible, 
    deleteAlertVisible, setDeleteAlertVisible
  } = useContext(Context);
  
  return (
    <>
      <motion.div 
        className={styles.basketinfo}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
      >
        <div className={styles.basketinfo__header}>
          <div>
            <h3>Basket ID: {selectedBasket?.id}</h3>
          </div>
          <button 
            onClick={() => {
              setBasketInfoVisible(!basketInfoVisible)
              setSelectedBasket(null)
            }}
          >
            <AiOutlineClose size={20}/>
          </button>
        </div>
        <Chart/>
        <div className={styles.basketinfo__buttons}>
          <button
            onClick={() => {
              setDeleteAlertVisible(!deleteAlertVisible)
            }}
          >
            <BsTrash size={30}/>
            Delete basket
          </button>
        </div>
      </motion.div>
      <Backdrop/>
      <AnimatePresence>
        {deleteAlertVisible && <DeleteAlert/>}
      </AnimatePresence>
    </>
  )
}

export default BasketInfo

