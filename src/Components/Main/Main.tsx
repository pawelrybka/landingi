import React, { useEffect, useContext, useRef, useState  } from 'react'
import Context from '../../Context/Context'
import styles from './Main.module.css'
import axios from 'axios'
import { BsBasket3 } from 'react-icons/bs';
import BasketInfo from '../BasketInfo/BasketInfo';
import { AnimatePresence } from 'framer-motion'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Main = () => {
    
    const { setSelectedBasket, baskets, setBaskets, basketInfoVisible, setBasketInfoVisible } = useContext(Context);

    const shouldLog = useRef(true)
    
    const[loading, setLoading] = useState(false)

    useEffect(() => {
        if(shouldLog.current){
            shouldLog.current = false
            axios.get('https://dummyjson.com/carts').then(res => {
                setBaskets(res.data.carts)
                setLoading(true)
            })
        }
    })

    return (
        <>
            <div className={styles.main}>
                {loading ? baskets.map((basket) => (
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
                )) : <LoadingSpinner/>}
                <AnimatePresence>
                    {basketInfoVisible && <BasketInfo />}
                </AnimatePresence>
            </div>
        </>
    )
}

export default Main;
