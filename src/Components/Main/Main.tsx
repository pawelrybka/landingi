import React, { useEffect, useContext, useRef  } from 'react'
import Context from '../../Context/Context'
import styles from './Main.module.css'
import axios from 'axios'
import { BsBasket3 } from 'react-icons/bs';
import BasketInfo from '../BasketInfo/BasketInfo';
import { AnimatePresence } from 'framer-motion'

interface products {
    discountPercentage: number
    discountedPrice: number
    id: number
    price: number
    quantity: number
    title: string
    total: number
}

interface basket {
    id: number
    userId: number
    products: products[]
    total: number
    totalProducts: number
    totalQuantity: number
    discountedTotal: number
}

const Main = () => {
    
    const { setSelectedBasket, baskets, setBaskets, basketInfoVisible, setBasketInfoVisible } = useContext(Context);

    const shouldLog = useRef(true)

    useEffect(() => {
        if(shouldLog.current){
            shouldLog.current = false
            axios.get('https://dummyjson.com/carts')
            .then(res => {
                const data = res.data.carts
                setBaskets(data)
            })
        }
    })

    return (
    <div className={styles.main}>
       {baskets.map((basket) => (
            <button 
                key={basket.id}     
                className={styles.main__button} 
                onClick={() => {
                    setBasketInfoVisible(!basketInfoVisible)
                    setSelectedBasket(basket)
                }}
            >
                <div>
                    <h1>{basket.id}</h1>
                    <span>Basket ID</span>
                </div>
                <BsBasket3 size={30}/>
            </button>
        ))}
        <AnimatePresence>
            {basketInfoVisible && <BasketInfo />}
        </AnimatePresence>
    </div>
  )
}

export default Main;

