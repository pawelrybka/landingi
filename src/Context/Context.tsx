import { createContext } from "react";

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

interface BasketContextType {
    selectedBasket: basket | null;
    setSelectedBasket: (basket: basket | null) => void;
    
    baskets: basket[] | [],
    setBaskets: (baskets: basket[] | []) => void;

    basketInfoVisible:  boolean,
    setBasketInfoVisible: React.Dispatch<React.SetStateAction<boolean>>

    deleteAlertVisible: boolean,
    setDeleteAlertVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Context = createContext<BasketContextType>({
    selectedBasket: null,
    setSelectedBasket: () => {},

    baskets: [],
    setBaskets: () => {},

    basketInfoVisible:  false,
    setBasketInfoVisible: () => {},

    deleteAlertVisible: false,
    setDeleteAlertVisible: () => {}

});

export default Context;

