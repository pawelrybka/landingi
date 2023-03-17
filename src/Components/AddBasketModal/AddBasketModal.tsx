import React, { useContext, useState } from 'react'
import styles from './AddBasketModal.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Context from '../../Context/Context'
import { AiOutlineClose } from 'react-icons/ai'
import { motion } from "framer-motion"
import { BsBasket3 } from 'react-icons/bs';
import { toast } from 'react-toastify';

interface Props {
  addBasketModalVisible: boolean
  setAddBasketModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddCartModal = ({ addBasketModalVisible, setAddBasketModalVisible }: Props) => {
  
  const { baskets, setBaskets } = useContext(Context);

  const[value, setValue] = useState(1)

  async function fetchData() {
    const response = await fetch(`https://dummyjson.com/carts/${value}`);
    const data = await response.json();
    console.log(data)
    setBaskets([...baskets, data])
  }

  const notify = () => {
    toast.success('New basket added!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  const error = () => {
    toast.error('Basket is already on the list', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  return (
    <>
      <motion.div 
        className={styles.addBasketModal}
        initial={{  opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: .3 }}
      >
        <div className={styles.addBasketModal__header}>
          <h3>New basket</h3>
          <button onClick={() => setAddBasketModalVisible(!addBasketModalVisible)}><AiOutlineClose size={20}/></button>
        </div>
        <div className={styles.addBasketModal__content}>
          <span>Enter basket ID:</span>
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
                  setAddBasketModalVisible(!addBasketModalVisible)
                  notify()
                } else{
                  error()
                  setAddBasketModalVisible(!addBasketModalVisible)
                }
              }}
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

