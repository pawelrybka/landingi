import React, { useContext } from 'react'
import styles from './AddCartModal.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Context from '../../Context/Context'

interface Props {
  addCartModalVisible: boolean
  setAddCardModalVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const AddCartModal = ({ addCartModalVisible, setAddCardModalVisible }: Props) => {
  
  const { baskets, setBaskets } = useContext(Context);

  async function postData() {
    const newBasket = {
      id: baskets.length + 5,
      userId: 1,
      products: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 50,
          quantity: 2,
        },
      ],
    };
  
    const response = await fetch('https://dummyjson.com/carts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBasket),
    });
  
    const newData = await response.json();
    setBaskets([...baskets, newData]);
  }

  return (
    <>
      <div className={styles.addcartmodal}>
        <button
          onClick={() => {
            setAddCardModalVisible(!addCartModalVisible)
            postData()
          }}
        >
          Add
        </button>
      </div>
      <Backdrop/>
    </>
  )
}

export default AddCartModal


