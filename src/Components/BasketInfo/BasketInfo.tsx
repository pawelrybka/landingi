import React from 'react'
import styles from './BasketInfo.module.css'

interface props{
  basketInfoVisible: boolean
  setBasketInfoVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const BasketInfo = ({ basketInfoVisible, setBasketInfoVisible }: props) => {
  return (
    <div className={styles.basketinfo}>
      <button onClick={() => setBasketInfoVisible(!basketInfoVisible)}>X</button>
      BasketInfo
    </div>
  )
}

export default BasketInfo

