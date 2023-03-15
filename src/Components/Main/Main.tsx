import React, { useState, useEffect, useContext } from 'react'
import Context from '../../Context/Context'
import styles from './Main.module.css'
import axios from 'axios'
import { SlBasket } from 'react-icons/sl';
import BasketInfo from '../BasketInfo/BasketInfo';

interface products {
    discountPercentage: number
    discountedPrice: number
    id: number
    price: number
    quantity: number
    title: string
    total: number
}

interface single {
    id: number
    userId: number
    products: products[]
    total: number
    totalProducts: number
    totalQuantity: number
    discountedTotal: number
}

const Main = () => {
    
    const { setSelectedBasket } = useContext(Context);

    const[baskets, setBaskets] = useState<single[]>([])

    const[basketInfoVisible, setBasketInfoVisible]= useState(false)

    useEffect(() => {
        axios.get('https://dummyjson.com/carts')
        .then(res => {
            const data = res.data.carts
            setBaskets(data)
        })
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
                <SlBasket size={30}/>
                {basket.id}
            </button>
        ))}
        {basketInfoVisible && 
            <BasketInfo 
                basketInfoVisible={basketInfoVisible}
                setBasketInfoVisible={setBasketInfoVisible}
            />
        }
    </div>
  )
}

export default Main;

