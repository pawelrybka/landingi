import React, { useContext } from 'react'
import styles from './Backdrop.module.css'
import { motion } from 'framer-motion'
import Context from '../../Context/Context'

const Backdrop = () => {

  const { deleteAlertVisible } = useContext(Context);

  return (
    <motion.div 
      className={`${styles.backdrop} ${deleteAlertVisible ? styles.up : ''} ${deleteAlertVisible ? styles.up : ''}`} 
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
    ></motion.div>
  )
}

export default Backdrop

