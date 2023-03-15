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
}

const Context = createContext<BasketContextType>({
    selectedBasket: null,
    setSelectedBasket: () => {}
});

export default Context;

