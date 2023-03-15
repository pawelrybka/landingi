import React from 'react'
import styles from './Backdrop.module.css'
import { motion } from 'framer-motion'

const Backdrop = () => {

  return (
    <motion.div 
      className={styles.backdrop}
      initial={{  opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3 }}
    ></motion.div>
  )
}

export default Backdrop

