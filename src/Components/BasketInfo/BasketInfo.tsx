import React from 'react'
import styles from './BasketInfo.module.css'
import { useContext } from 'react';
import Context from '../../Context/Context'

interface props{
  basketInfoVisible: boolean
  setBasketInfoVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const BasketInfo = ({ basketInfoVisible, setBasketInfoVisible }: props) => {
  
  const { selectedBasket, setSelectedBasket } = useContext(Context);
  
  return (
    <div className={styles.basketinfo}>
      <button 
        onClick={() => {
          setBasketInfoVisible(!basketInfoVisible)
          setSelectedBasket(null)
        }}
      >
        X
      </button>
      {selectedBasket?.id}
    </div>
  )
}

export default BasketInfo

