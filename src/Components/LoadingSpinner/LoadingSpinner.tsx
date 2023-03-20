import React from 'react'
import styles from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={styles.ldsroller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default LoadingSpinner


