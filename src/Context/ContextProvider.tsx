import React, { useState } from "react";
import Context from "./Context";

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

type ListProps = {
    children: React.ReactNode;
}

const ContextProvider = ({ children }: ListProps) => {
    
    const [selectedBasket, setSelectedBasket] = useState<basket | null>(null);
  
    const[baskets, setBaskets] = useState<basket[]>([])

    return (
        <Context.Provider value={{ selectedBasket, setSelectedBasket, baskets, setBaskets }}>
            {children}
        </Context.Provider>
    );
  };
  
  export default ContextProvider;

  