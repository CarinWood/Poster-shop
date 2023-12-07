import { ReactNode, createContext, useContext, useState } from "react";
import { CartItem } from "../types/cartTypes";


type shoppingCartContext = {
    cart: CartItem[];
    setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
    handlePlus: (_id: number) => void;
}

type cartProviderProps = {
    children: ReactNode
}


const cartContext = createContext({} as shoppingCartContext)

export function useShoppingCart() {
    return useContext(cartContext)
}



export const CartProvider = ({children}: cartProviderProps) => {
        const [cart, setCart] = useState<CartItem[]>([])

        const handlePlus = (_id: number) => {
          const updatedCart = cart.map(item => {
            if (item.id === _id) {
              return { ...item, quantity: item.quantity + 1 }; 
            }
            return item;
          });
          setCart(updatedCart)
        }


  return (
    <cartContext.Provider
        value={{
          cart,
          setCart,
          handlePlus
        }}
    >
            {children}
    </cartContext.Provider>
  
  )
}
