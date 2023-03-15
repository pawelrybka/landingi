import React, { useState, useEffect } from 'react'
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
    const[objects, setObjects] = useState<single[]>([])

    const[basketInfoVisible, setBasketInfoVisible]= useState(false)

    useEffect(() => {
        axios.get('https://dummyjson.com/carts')
        .then(res => {
            const data = res.data.carts
            setObjects(data)
        })
    })
 
    return (
    <div className={styles.main}>
       {objects.map((object) => (
            <button className={styles.main__button} onClick={() => setBasketInfoVisible(!basketInfoVisible)}>
                <SlBasket size={30}/>
                {object.id}
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

export default Main

