import React, { useContext, useState } from 'react'
import styles from './AddBasketModal.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Context from '../../Context/Context'
import axios from 'axios'
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
    try {
      const response = await axios.get(`https://dummyjson.com/carts/${value}`);
      const data = response.data;
      setBaskets([...baskets, data]);
    } catch (error) {
      console.error(error);
    }
  }
  
  const notify = () => {
    toast.success('New basket has been added!', {
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

  const basketOnList = () => {
    toast.error('Basket is already in the list', {
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

  const invalidID = () => {
    toast.error('Invalid ID', {
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
          <span>Enter basket ID (1-20):</span>
          <div className={styles.select}>
            <input 
              type="number" 
              inputMode='numeric'
              min="1"
              max="20"
              step="1"
              value={value}
              onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <button
              onClick={() => {
                if (value > 20) {
                  invalidID();
                } else if (!baskets.some(basket => basket.id === value)) {
                  fetchData()
                  setAddBasketModalVisible(!addBasketModalVisible)
                  notify()
                } else {
                  basketOnList()
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

