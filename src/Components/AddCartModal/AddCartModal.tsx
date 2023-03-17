import React, { useContext, useState } from 'react'
import styles from './AddCartModal.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Context from '../../Context/Context'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from "framer-motion"
import { BsBasket3 } from 'react-icons/bs';
import axios from 'axios'

interface Props {
  addCartModalVisible: boolean
  setAddCardModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddCartModal = ({ addCartModalVisible, setAddCardModalVisible }: Props) => {
  
  const { baskets, setBaskets } = useContext(Context);

  const[value, setValue] = useState(1)

  async function fetchData() {
    const response = await fetch(`https://dummyjson.com/carts/${value}`);
    const data = await response.json();
    console.log(data)
    setBaskets([...baskets, data])
  }
              
  return (
    <>
      <motion.div 
        className={styles.addCartModal}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
      >
        <div className={styles.addCartModal__header}>
          <h3>Add new basket</h3>
          <button onClick={() => setAddCardModalVisible(!addCartModalVisible)}><AiOutlineClose size={20}/></button>
        </div>
        <div className={styles.addCartModal__content}>
          <span>Choose the id of the basket:</span>
          <div className={styles.select}>
            <input 
              type="number" 
              id="quantity" 
              name="quantity" 
              min="1" 
              max="20"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
              onClick={() => {
                if (!baskets.some(basket => basket.id === value)) {
                  fetchData()
                  setAddCardModalVisible(!addCartModalVisible)
                }}
              }
            >
              Add new basket
              <BsBasket3 size={30}/>
            </button>
          </div>
        </div>
      </motion.div>
      <Backdrop/>
    </>
  )
}

export default AddCartModal

